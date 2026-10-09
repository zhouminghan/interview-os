---
id: STORAGE-0514
type: technical
question: Clickhouse的INSERT SELECT语句如何使用？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

从查询结果插入表。

# 参考回答

INSERT INTO 目标表 SELECT ... FROM 源表，把查询结果插入。常用于数据转换、迁移、预聚合。比逐条插入高效。

# 追问

- INSERT SELECT 用途？
