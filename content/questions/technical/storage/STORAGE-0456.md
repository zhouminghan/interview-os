---
id: STORAGE-0456
type: technical
question: Clickhouse支持哪些索引类型？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

主键稀疏索引和跳数索引。

# 参考回答

ClickHouse 有主键稀疏索引、跳数索引（Skip Index）、Bloom Filter。主键索引定位数据范围，跳数索引跳过无关数据块。

# 追问

- 索引类型怎么选？
