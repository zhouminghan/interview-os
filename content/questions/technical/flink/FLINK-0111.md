---
id: FLINK-0111
type: technical
question: Flink作业的扩缩容机制是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

改并行度或加 TaskManager 触发 rescale。

# 参考回答

扩缩容可以改并行度或加 TaskManager，从 savepoint 恢复时重新分配状态。自动扩缩容靠外部系统按指标调整。

# 追问

- rescale 状态怎么重新分配？
