---
id: WAREHOUSE-0363
type: technical
question: 反压是什么？怎么优化？
difficulty: 0
topic: []
source_type: knowledge
---

**🎯 这道题的「成长价值」**：反压（Backpressure，和「背压」是同一个概念）是流式计算里绕不过的课题。刚答完 Exactly Once，面试官接着问反压——不是巧合，是故意把「流式计算的两条腿」连着问：**Exactly Once 管「算得对不对」，反压管「跑得稳不稳」**。你能把这两者的关系讲清楚，面试官会觉得你对流处理有系统性的理解，而不是零散的知识点。

---

**🧠 本质：反压不是 bug，是流式系统的自我保护**

如果一个流处理系统没有反压，会怎样？

> 上游拼命生成数据 → 下游处理不过来 → 数据在内存中堆积 → OOM 崩溃 → 丢数据。

反压的本质就是 **「下游承载不了时，让上游慢下来」**——就像水管：下游水龙头拧小，管道里的水流自动变慢，不会爆管。

对比批处理（MR/Spark batch）：批处理是 **stop-and-go** 模式——上游算完才启动下游，天然不存在反压问题，代价是延迟高。流处理追求**低延迟的持续运行**，上下游同时工作，就必须有反压来协调速度。

| 维度 | 批处理（MR / Spark Batch） | 流处理（Flink / Spark Streaming） |
|------|---------------------------|----------------------------------|
| 执行模式 | Stage 屏障，上游写完下游才开始 | 上下游同时持续运行 |
| 是否需要反压 | 天然不需要（等就完了） | **必须有**，否则 OOM |
| 延迟 | 高（分钟级） | 低（毫秒 ~ 秒级） |

---

**📊 Flink 的反压机制：Credit-Based Flow Control（信用制流量控制）**

Flink 用 **Credit-Based** 机制实现反压，核心思想是——**下游给上游发「额度」（Credit），上游只能在额度内发送数据**。

```
        上游 SubTask                      下游 SubTask
    ┌──────────────────┐            ┌──────────────────┐
    │   InputGate       │            │   ResultPartition │
    │   (接收 Credit)   │←─ Credit ─│   (发送 Credit)    │
    │                    │   Buffer →│                    │
    │   只能发 Credit 量化 │            │   有多少空闲 buffer   │
    │   以内的 Buffer     │            │   就发多少 Credit    │
    └──────────────────┘            └──────────────────┘
```

**流程**：
1. 下游初始化时，告诉上游「我最多能缓存 N 个 buffer」
2. 下游每处理完一个 buffer，就向上游回传一个 Credit：**「再给我一个」**
3. 上游累计 Credit = 0 时 → **自动停止发送**，缓冲区自然空转，上游算子被阻塞在写 buffer 这一步
4. 这种阻塞逐级向上传递（上游的上游也慢下来），最终传到 Source 端，Source 拉取数据的速度也自然放缓

> **一句话本质**：Flink 反压 = 「下游用 Credit 绳牵着上游，你拉多快我跟多快」。它不是靠系统发"慢点"信号，而是靠 **buffer 的自然阻塞** 逐级向上传导。

**对比其他流引擎**：

| 引擎 | 反压机制 | 特点 |
|------|---------|------|
| **Flink** | Credit-Based（Netty 网络栈层面） | 精细粒度、逐级传导、无需额外信号 |
| **Spark Streaming（老）** | 基于 Receiver 的限速（`spark.streaming.receiver.maxRate`） | 粗粒度，需预估速率上限，不灵活 |
| **Spark Structured Streaming** | Microbatch 自然限速（前一 batch 处理完才起下一个） | 类似批处理的天然反压，但延迟较高 |
| **Kafka Streams** | 类似 TCP 窗口（consumer poll + processing time） | 依赖 consumer 拉取速度自然限流 |

---

**🔍 诊断：怎么定位瓶颈**

| 方法 | 看什么 | 怎么判断 |
|------|--------|---------|
| **Flink Web UI** | 顶栏 BackPressure 状态 | `OK`（绿）→ 无压力；`LOW`（黄）→ 轻微；`HIGH`（红）→ 严重反压 |
| **每个算子的详情** | Busy / Idle / BackPressured 时间占比 | BackPressured > 50% = 这个算子就是瓶颈 |
| **关键指标** | inputQueueLength / outputQueueLength | 下游的 inputQueue 堆积 = 反压正在这里 |
| **定位链** | 从 Sink 往 Source 方向看，**第一个出现 HIGH 的算子就是根因瓶颈** | 反压是传导性的，后面的 HIGH 是被前面拖慢的 |

> **诊断口诀**：从后往前找，第一个红的才是真凶。

---

**🔧 分级优化（从低代价到高代价）**

反压优化不是随意加并行度——不同瓶颈需要不同策略。

| 瓶颈位置 | 根因 | 优化手段 | 代价 |
|----------|------|---------|------|
| **Sink 端** | 外部系统写入慢（DB 事务、接口延迟） | ① 增加 Sink 并行度；② 启异步 IO（`AsyncIO`）；③ 增大批量写入（batch size）；④ Sink 前加 buffer 算子合并小批次 | 低 |
| **Source 端** | 数据源读取本身就是瓶颈（如单 Kafka 分区） | ① 增加 Source 并行度（前提是 Kafka 分区数足够）；② 调整数据源限流配置 | 低 |
| **CPU 密集型算子** | 计算逻辑重（复杂 UDF、正则、JSON 解析） | ① 增加并行度；② 优化计算逻辑（预编译正则、用 fastjson 替代 jackson）；③ 考虑 CEP/复杂逻辑拆成多阶段 | 中 |
| **数据倾斜** | 某个 Key 数据量远超其他 | ① `rebalance()` / `rescale()` 打散；② 两阶段聚合（先局部再加盐）；③ 自定义 KeyBy 加随机前缀 | 中 |
| **状态过大** | RocksDB 读写成为瓶颈 | ① 设置 State TTL 清理过期状态；② 增量 Checkpoint；③ 调优 RocksDB 参数（`state.backend.rocksdb.block.cache-size` 等）；④ 考虑用 SSD 做状态后端 | 中 |
| **Checkpoint 冲击** | 快照频率过高、状态量大，快照期间抢占 IO | ① 增大 Checkpoint 间隔；② 开启增量 Checkpoint（RocksDB）；③ 调优化 `state.backend.rocksdb.writebuffer.count` | 中 |
| **网络带宽** | 子任务间传输数据量超出带宽 | ① 增大 `taskmanager.network.memory.buffers-per-channel`；② 优化序列化（用 Kryo 替代 Java 序列化） | 中 |
| **整体负载** | 集群资源不足 | ① 增加 TaskManager 数；② 增大单个 TM 的 slot 数；③ 考虑分离大状态任务到独立集群 | 高 |

---

**🔗 反压与 Exactly Once 的内在关系**

| | Exactly Once | 反压 |
|---|---|---|
| 解决的问题 | 正确性（不丢不重） | 稳定性（不崩不慢） |
| 核心机制 | Barrier 对齐 + Checkpoint + Sink 2PC/幂等 | Credit 限流 + Buffer 自然阻塞传导 |
| 互相影响 | 严重反压 → Barrier 流速变慢 → Checkpoint 超时失败 → 无法保证 Exactly Once | — |
| 共同敌人 | 两者都怕 **数据倾斜**（倾斜→反压→Checkpoint 延迟→故障恢复后重算量大） | 同左 |

> **一句话**：反压是 Exactly Once 的「基础设施健康度」指标——反压得不到解决，Exactly Once 的 Checkpoint 也无法稳定完成。

**💡 面试点评**：答完反压的成因和优化后，如果主动加一句——「反压和刚刚聊的 Exactly Once 是相互关联的，严重反压会导致 Barrier 流动变慢、Checkpoint 频繁超时，最终威胁 Exactly Once 的能力」——面试官会确认你已经把流处理的两条核心链路理解成一体了。
