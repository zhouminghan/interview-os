---
id: STORAGE-0519
type: technical
question: Clickhouse的TRUNCATE TABLE语句有什么作用？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

清空表数据，保留结构。

# 参考回答

TRUNCATE TABLE 清空表所有数据，保留表结构。不可恢复，删前确认。比逐条 DELETE 快很多。

# 追问

- TRUNCATE 能恢复吗？
