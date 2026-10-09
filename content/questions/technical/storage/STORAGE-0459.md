---
id: STORAGE-0459
type: technical
question: 什么是Clickhouse的谓词下推？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

过滤条件推到扫描阶段。

# 参考回答

谓词下推把 where 条件推到数据读取阶段，配合主键和跳数索引减少扫描。是 ClickHouse 快的重要原因。

# 追问

- 下推依赖什么？
