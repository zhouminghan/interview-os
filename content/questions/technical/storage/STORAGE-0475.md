---
id: STORAGE-0475
type: technical
question: 如何创建一个MergeTree表并指定分区键和排序键？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CREATE TABLE 指定 ENGINE 和分区排序键。

# 参考回答

建 MergeTree 表指定 ENGINE=MergeTree，PARTITION BY 分区键，ORDER BY 排序键。排序键决定存储顺序和主键，按查询设计。

# 追问

- 分区键和排序键怎么设？
