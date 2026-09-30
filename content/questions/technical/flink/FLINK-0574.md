---
id: FLINK-0574
type: technical
question: Flink 反压机制和排查思路？（高频⭐⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：美团-数据开发实习一面-20260430 Q6、腾讯-数据工程-20260415（引申自实时数仓项目）

**反压本质**：下游算子处理不过来，把压力**反向传导**到上游的现象。Flink 1.5+ 用 **Credit-based 信用流控**——下游告诉上游"我还能收多少 buffer"，上游按 credit 发数据，下游来不及消费 credit 就给 0，上游自然停下来，最终一直传到 source，source 减少消费 Kafka。

**怎么发现**：
1. Flink Web UI 反压面板（OK/LOW/HIGH），从 Sink 往上游找第一个 HIGH 的算子
2. Metrics 看 `inPoolUsage` / `outPoolUsage`，buffer 占用率高就是反压信号
3. 区分自身慢 vs 下游传导：busy >80% 说明自身是瓶颈

**怎么定位真正瓶颈**：从下游往上排查，**反压最严重的下一个算子才是真正的瓶颈**——它没反压（下游不卡），但上游被它压住了。

**根因定位**：CPU 高 → 火焰图；State 慢 → arthas trace 读写耗时；GC 频繁 → 看日志频率。

**怎么治理**：
1. 加并行度
2. 优化算子逻辑（JOIN 维表慢改异步 IO、状态膨胀清理过期 key）
3. 看下游 sink 是不是慢（写 Kafka/MySQL/HDFS 的网络或限流）
4. 资源不够加资源

**实战案例**：DWD 清洗算子正则匹配导致反压，改成 String.split() + indexOf() 手动解析，CPU 降 60%。

**反压的副作用**：不治理直接导致 **checkpoint 做不下去**（barrier 传不到下游对齐），数据延迟越来越大。

> 💡 **专家补充**：
> - **Credit-based 流控比早期的 TCP 反压更优**——TCP 反压粒度粗（整个 TaskManager 卡住），Credit-based 是 subtask 级别的精细控制，单个慢 subtask 不会拖累整个 TaskManager
> - **"反压最严重的下一个算子是瓶颈"是反压排查的核心心法**——很多人误以为最红的算子有问题，其实它是被卡的那个，真正有问题的是它下游
> - **反压和 checkpoint 是相互绑定的**——反压严重必然 checkpoint 慢，checkpoint 慢又会让 state 越来越大进一步加重反压，形成恶性循环。所以治理反压是实时任务运维的第一优先级

---
