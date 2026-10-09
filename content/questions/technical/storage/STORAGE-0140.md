---
id: STORAGE-0140
type: technical
question: 什么是Hive的并行度设置？请详细说明并行度的配置方法、影响因素和优化策略。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

并行度由 reduce 数和分区决定。

# 参考回答

并行度由 reduce 任务数决定，可以手动设或按数据量自动。太低处理慢，太高调度开销大。一般设成和数据量匹配，配合分区分桶。

# 追问

- reduce 数怎么设？
