---
id: STORAGE-0429
type: technical
question: 解释Clickhouse的表引擎和数据库引擎的区别。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

表引擎管数据存储，库引擎管库内表。

# 参考回答

表引擎决定表数据怎么存、怎么读写；数据库引擎管一个库内的表，比如普通库、Replicated 库、Lazy 库。两者分工不同。

# 追问

- 库引擎有哪些？
