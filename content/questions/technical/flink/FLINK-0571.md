---
id: FLINK-0571
type: technical
question: Flink Checkpoint 机制和 Exactly-Once 语义？（高频⭐⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：美团-大数据开发-20260415 Q11、腾讯-数据工程-20260415 Q18

Checkpoint 基于 Chandy-Lamport 分布式快照：JobManager 注入 Barrier → 随数据流传递 → 算子收到所有上游 Barrier 后快照状态 → 持久化到外部存储。

Exactly-Once 端到端保障：Kafka Source offset 保存到 Checkpoint → 失败从上次 Checkpoint offset 重新消费 → Sink 端需支持事务/幂等写入（如 Iceberg 事务性 Commit）。

**Savepoint vs Checkpoint**：Checkpoint 自动触发用于故障恢复，Savepoint 手动触发用于计划内重启。

> 💡 **专家补充**：
> - **Chandy-Lamport 算法的精妙之处在于"不停车拍照"**——Barrier 跟着数据流走，算子该处理的照常处理，只是在 Barrier 到达时"咔嚓"一下存个快照。所以 Checkpoint 对正常处理的影响很小。
> - **端到端 Exactly-Once 的难点不在 Flink 内部而在 Sink**——Flink 内部通过 Barrier 对齐保证状态一致性是成熟的，真正的坑在下游写入。如果 Sink 不支持事务或幂等，就算 Flink 内部 Exactly-Once 了，写出去的数据也可能重复。
> - **"Checkpoint 是自动挡，Savepoint 是手动挡"这个类比很好记**——日常容错靠 Checkpoint 自动兜底，升级重启前手动打个 Savepoint 留个安全点。

> 🎤 **口语表达版**（面试现场这样说）：
>
> 「这道题我会按"**Checkpoint 是怎么做的 → Exactly-Once 怎么保的 → Savepoint 跟它啥关系**"三个层次讲。
>
> 先讲 **Checkpoint**。它的核心是 **Chandy-Lamport 分布式快照算法**，最精妙的地方我用一个比喻——「**不停车拍照**」。整个流处理作业不需要停下来，JobManager 周期性地往 Source 注入一个**Barrier**（你可以理解成一个特殊的信号），这个 Barrier 跟着数据流一起往下游走。每个算子收到所有上游 Barrier 之后，就「咔嚓」一下把自己当前的状态打个快照，存到外部存储——比如 HDFS 或者对象存储。所以 Checkpoint 对正常处理几乎无影响，这是它能在生产长期跑的关键。
>
> 然后讲 **Exactly-Once（精确一次性）**。这里要强调一个点：**端到端 Exactly-Once 不是 Flink 一家的事**——很多人面试只讲 Flink 内部，会被追问。完整的端到端要三方配合：
>
> - **Source 端可重放**：典型的就是 Kafka，offset 会被存进 Checkpoint，作业重启时从上次 Checkpoint 的 offset 开始重消费
> - **Flink 内部一致性**：靠 Barrier 对齐机制保证算子状态和数据进度同步快照
> - **Sink 端事务或幂等**：要么用两阶段提交（比如 Kafka 事务、Iceberg 的 ACID Commit），要么用幂等写入（比如 MySQL 按主键 upsert）
>
> 这三个环节缺一不可。我自己的项目里实时数仓 Flink 写 Iceberg，就是用 Iceberg 的事务提交配合 Flink 的两阶段提交，**checkpoint 没成功 = 这批数据下游不可见**，这样保证一致性。
>
> 最后讲 **Savepoint**。Savepoint 和 Checkpoint 底层格式一样，区别在用途——「**Checkpoint 是自动挡，Savepoint 是手动挡**」。Checkpoint 是 Flink 周期性自动触发的，专门用于故障恢复；Savepoint 是开发人员主动触发的，用于**计划内重启**——比如升级 Flink 版本、调整作业并行度、改算子逻辑，发版前手动打一个 Savepoint，新版本作业从这个 Savepoint 启动，状态无缝迁移。
>
> 一句话总结：**Checkpoint 是流处理的"安全气囊"，Exactly-Once 是 source-flink-sink 三方协同的结果，Savepoint 是发版前的"存档点"**。」
>
> ⏱️ **预计讲完时长**：2~2.5 分钟
>
> 🔑 **回答时的提示线**：
> - 先讲 Checkpoint 用「不停车拍照」比喻 Barrier
> - 再讲 Exactly-Once **必须主动说"端到端"**，分 source / flink / sink 三方
> - 最后用「自动挡 vs 手动挡」收尾区分 Savepoint
> - 项目落地举例 Flink + Iceberg 双重提交

---
