---
id: WAREHOUSE-0356
type: technical
question: MapReduce 的 Shuffle 过程讲一下。
difficulty: 0
topic: []
source_type: knowledge
---

**🎯 这道题的「成长价值」**：面试官问 Shuffle 不是在考你有没有背过五步，而是看你**能不能把"数据跨节点重分布"这一概念打通到 Spark / Flink 中去**。如果你只答 MR 的 Shuffle，顶多得个及格分；如果你能顺势带出三者的对比，面试官会觉得你**真正理解了执行引擎**——这是 P6 到 P6+ 的分水岭。

---

**🧠 核心记忆模式**：所有 Shuffle 本质就是三个字——**「分区 - 传输 - 聚合」**。

| 阶段 | 做了什么 | MR 的叫法 | Spark 的叫法 | Flink 的叫法 |
|------|---------|----------|-------------|-------------|
| ① 分区 | 按 Key 决定数据发往哪个下游节点 | Partition（HashPartitioner） | 同样的 Partitioner | KeyBy / KeyGroup |
| ② 传输 | 数据从上游跨网络到下游 | Copy（HTTP 拉取） | Shuffle Read（Netty fetch） | 流式 network buffer（credit-based 推拉） |
| ③ 聚合 | 同 Key 数据汇到一起排序/合并 | Merge → Sort → Group | 同左，可选 map-side combine | 状态内聚合（不做全排序合并） |

---

**📖 MapReduce Shuffle（详细版，好记的口诀）**

**Map 端（口诀：**写缓冲 → 溢写排序 → 多路归并**）**
1. Map Task 读 InputSplit 处理产出 `<K, V>`
2. 输出不直写磁盘，先进**环形内存缓冲区**（默认 100MB，达 80% 触发 spill）
3. Spill 前先 **Partition**（HashPartitioner 按 Key 对 Reduce 数取模），再**按分区内部按 Key 排序**
4. 如果 Map 输出较大、产生多个 spill 文件，最终 **Merge 归并** 成一个分区整体有序的大文件
5. 落盘后 Map Task 结束，等待 Reduce 来拉

**Reduce 端（口诀：**HTTP 拉取 → 归并排序 → 同 Key 聚合**）**
1. Reduce Task 启动后，**HTTP Copy** 从每个 Map 节点拉取属于自己分区的数据
2. 边拉边**在内存合并**（内存不够则 spill 到磁盘），拉完所有后再整体 Merge Sort
3. 排序完成后相同 Key 自然聚在一起，然后调用 `reduce()` 做聚合
4. 结果写回 HDFS

**一句话记忆**：Map 端「溢写→归并」，Reduce 端「拉取→归并→聚合」。中间全部要落盘，网络和磁盘 IO 双高。

---

**⚡ Spark Shuffle（对比 MR，说出差异才叫懂）**

| 差异点 | MR | Spark |
|--------|-----|-------|
| 实现类型 | 只有 SortShuffle 一种 | SortShuffle（默认）+ 已淘汰的 HashShuffle |
| Map 端输出 | 每个 Reduce 对应一个分区文件 | 所有分区合并成一个**索引文件 + 数据文件**（减少小文件） |
| 触发时机 | 每一个 Job 的 Map→Reduce 之间 | 每个 **宽依赖**（groupByKey / reduceByKey / join）触发一次 Shuffle |
| 优化手段 | 几乎无内建优化 | **map-side combine**（reduceByKey 默认开启）、AQE 动态合并分区 |
| bypass 优化 | 无 | 分区数极少（< 200）且不需要排序时，走 bypass 跳过排序直接 HashMap spill |
| Tungsten | 无 | Spark 1.6+ 使用堆外内存 + 紧凑二进制编码，打乱更高效 |
| 分区数控制 | `mapreduce.job.reduces` | `spark.sql.shuffle.partitions`（默认 **200**，大作业必须调大） |

**记忆**：Spark Shuffle = MR Shuffle 的"进化版"，核心优化是**合并数据文件 + map-side combine + AQE 动态调整**。面试中说出"Spark 是索引文件 + 数据文件的结构"就能把 MR 甩开一大截。

---

**🌊 Flink Shuffle（和 MR/Spark 的根本不同）**

Flink 是**流式执行引擎**，它的 Shuffle 跟 MR/Spark 的批量 Shuffle 有本质区别：

| 差异 | 批量 Shuffle（MR/Spark） | 流式 Shuffle（Flink） |
|------|-------------------------|---------------------|
| 执行模式 | 先写完再拉（**stage 屏障**，上游全部完成才启动下游） | 边写边传（**pipelined**，上、下游同时运行） |
| 磁盘使用 | **必落盘**（spill to disk） | **不落盘传输**（直接内存中 network buffer 传输） |
| 排序 | Map 输出必须排序 | **不排序**（KeyBy 用 Hash 分桶，不保证 Key 有序） |
| 流控 | 无（拉取模式，Reduce 能拉多少拉多少） | **Credit-based flow control**（下游发 credit 给上游，上游按量发送，防止反压） |
| 分区键范围 | Hash % Reduce 数 | Hash % maxParallelism → KeyGroup → 映射到 subtask |

**一句话区分**：MR/Spark Shuffle = 分批次搬运（stop-and-go）；Flink Shuffle = 水管传输（streaming）。

**💡 面试点评**：答完 MR 的 Shuffle 后，主动加一句——"与之对比，Spark 的 Shuffle 多了 map-side combine 和索引文件优化；Flink 是流式 pipelined 传输，不落盘不排序，靠 credit-based 反压控制速率"——这会让面试官觉得你不是在背书，而是把三套引擎的 Shuffle 融会贯通了。这是 P6+ 甚至 P7 的思维方式。
