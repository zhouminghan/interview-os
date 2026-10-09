---
id: STORAGE-0442
type: technical
question: 解释Clickhouse的主键和排序键的区别。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

排序键决定存储顺序，主键是排序键前缀。

# 参考回答

排序键决定数据物理排序，主键通常是排序键的前缀，用于索引加速。ClickHouse 主键不唯一，是稀疏索引。

# 追问

- 主键和排序键什么关系？
