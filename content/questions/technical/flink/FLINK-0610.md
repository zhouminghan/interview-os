---
id: FLINK-0610
type: technical
question: Source → Transformation → Sink
difficulty: 0
topic: []
source_type: knowledge
---

# 回答思路

1. 开口先用一条数据链路定义三类算子：Source 接入、Transformation 计算、Sink 输出。
2. 接着说明中间层不只是 map：要按业务选择 keyBy、窗口、join 或聚合，并交代时间与状态语义。
3. 然后补运行时：算子的并行度、数据重分区和 checkpoint 决定吞吐与恢复能力。
4. 最后收在端到端语义：Sink 是否能配合可重放 Source 与 checkpoint，决定外部系统看到的结果是否一致。

# 一句话

Flink 作业由 Source 接入数据、Transformation 完成有状态计算、Sink 输出结果，再由 checkpoint 把整条链路的容错串起来。

# 30 秒回答

我会按一条数据怎么流来讲。Source 从 Kafka 或文件里读记录，并定义事件时间和 watermark；Transformation 按 key 做窗口、聚合或关联，中间状态由 Flink 管理；Sink 再把结果写到外部系统。光说「读、算、写」还不够，要补一句 checkpoint：作业失败时靠它恢复 Source 位点、算子状态和写入进度。

# 1 分钟回答

第一，从 Source 讲输入边界：它是流还是批、能否重放、事件时间怎么取，以及 watermark 如何表达进度。第二，讲 Transformation 的核心：keyBy 决定相同 key 落到同一并行子任务，窗口和聚合会产生 keyed state，处理迟到数据时要明确窗口生命周期和撤回/更新策略。第三，讲 Sink 与容错落地：checkpoint 会持久化 Source 位点和算子状态，但外部系统的一致性还要求 Sink 幂等或支持事务提交；若下游写入成为瓶颈，还要从反压指标定位，而不是只调 Source 并行度。

# 追问

- 状态保存在哪里？回答要点：运行时由 HashMap 或 RocksDB state backend 管理，容错快照通过 checkpoint 写入持久存储，恢复时再加载并回放 Source。
- watermark 属于哪一段？回答要点：通常由 Source 或紧随 Source 的算子生成，沿数据流传播，用来推进事件时间和触发窗口，不属于 Sink。
- 怎样做到端到端不丢不重？回答要点：需要可重放的 Source、开启 checkpoint，并配合幂等或事务型 Sink；仅有算子状态不能保证外部系统 exactly-once。
