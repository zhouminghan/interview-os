---
id: STORAGE-0477
type: technical
question: 如何在Clickhouse中添加新列？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ALTER TABLE ADD COLUMN。

# 参考回答

添加列用 ALTER TABLE 表 ADD COLUMN 列名 类型。ClickHouse 加列很快，只改元数据。可以加默认值。

# 追问

- 加列快吗？
