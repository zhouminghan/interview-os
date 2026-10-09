---
id: STORAGE-0538
type: technical
question: Clickhouse的索引选择策略是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

排序键做主索引，跳数索引辅助。

# 参考回答

索引选择：排序键作为主稀疏索引，按过滤字段设计；跳数索引按过滤类型选，等值用 bloom filter，范围用 minmax。别建太多索引。

# 追问

- 索引怎么设计？
