---
id: STORAGE-0484
type: technical
question: 解释Clickhouse的SELECT语句中的LIMIT BY子句。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

LIMIT BY 按分组每组取前 N 条。

# 参考回答

LIMIT BY 字段 加 LIMIT N，按字段分组每组取前 N 条。类似分组 TopN，比窗口函数简单。常配合 ORDER BY 用。

# 追问

- LIMIT BY 和窗口 TopN 区别？
