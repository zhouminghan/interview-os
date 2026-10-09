---
id: SPARK-0168
type: technical
question: Structured Streaming的容错机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

checkpoint 加 WAL 保证 exactly-once 恢复。

# 参考回答

容错靠 checkpoint 保存 offset 和状态，加 write-ahead log，恢复时从 checkpoint 重放，保证 exactly-once。引擎本身不可变，重算结果一致。

# 追问

- checkpoint 里存了什么？
