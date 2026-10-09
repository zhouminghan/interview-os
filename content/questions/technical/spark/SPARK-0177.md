---
id: SPARK-0177
type: technical
question: 如何实现Structured Streaming的数据清理？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

清理 checkpoint 和输出目录的过期数据。

# 参考回答

数据清理主要是清旧 checkpoint、状态和输出目录，配 retention 或定期清理。状态要做 TTL 清理，不然无限增长。

# 追问

- 状态 TTL 怎么配？
