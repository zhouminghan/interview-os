---
id: SPARK-0172
type: technical
question: Structured Streaming的检查点机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

checkpoint 存 offset、状态和元数据。

# 参考回答

checkpoint 保存消费 offset、聚合状态和查询元数据，重启从 checkpoint 恢复。必须配在可靠存储，且查询结构变了要小心恢复。

# 追问

- 查询结构变了 checkpoint 还能用吗？
