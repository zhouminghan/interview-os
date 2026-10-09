---
id: FLINK-0358
type: technical
question: 如何在FlinkSQL中使用ProcessFunction实现复杂逻辑？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

转 DataStream 用 ProcessFunction，再转回表。

# 参考回答

SQL 里用 ProcessFunction 要把表转成 DataStream，在 ProcessFunction 里访问状态、定时器、侧输出做复杂逻辑，再转回表。SQL 表达不了的逻辑走这条路。

# 追问

- 什么逻辑 SQL 表达不了？
