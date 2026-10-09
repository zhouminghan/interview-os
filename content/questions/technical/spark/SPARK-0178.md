---
id: SPARK-0178
type: technical
question: Structured Streaming的容错恢复机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

从 checkpoint 恢复 offset 和状态继续。

# 参考回答

恢复从 checkpoint 读 offset 和状态，从上次位置继续处理。sink 要幂等才能保证恢复后不重不丢。

# 追问

- 恢复时 sink 重复了怎么办？
