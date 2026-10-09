---
id: FLINK-0160
type: technical
question: Flink作业扩缩容后状态不一致如何处理？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

从 savepoint 恢复保证状态重新分配一致。

# 参考回答

扩缩容后状态不一致，要用 savepoint 做 rescale，让 Flink 重新分配状态。直接改并行度不加 savepoint 会丢状态或分配错。

# 追问

- rescale 和 savepoint 什么关系？
