---
id: SPARK-0186
type: technical
question: Structured Streaming的容错策略有哪些？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

checkpoint、WAL、幂等 sink 组合。

# 参考回答

容错策略就是 checkpoint 加 WAL 存状态和 offset，配合可重放 source 和幂等 sink，实现 exactly-once 恢复。

# 追问

- 三块缺一块会怎样？
