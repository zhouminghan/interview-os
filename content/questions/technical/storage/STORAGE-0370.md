---
id: STORAGE-0370
type: technical
question: 详细解释HBase的索引优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RowKey 主索引加二级索引。

# 参考回答

索引优化主要靠 RowKey 设计好，二级索引用 Phoenix 或索引表。索引表维护成本高，按查询需求建。能靠 RowKey 就别建二级索引。

# 追问

- 二级索引维护成本？
