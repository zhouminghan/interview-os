---
id: FLINK-0224
type: technical
question: 如何在FlinkSQL中创建和管理临时表与永久表？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

临时表 session 内有效，永久表存 Catalog。

# 参考回答

临时表只当前 session 有效，用 createTemporaryTable 建；永久表存 Catalog，跨 session 用。临时表适合中间结果。

# 追问

- 临时表和永久表怎么选？
