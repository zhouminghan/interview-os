---
id: STORAGE-0447
type: technical
question: 什么是Clickhouse的稀疏索引？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

每隔一段数据建一个索引项。

# 参考回答

稀疏索引不是每行一个索引，而是每 N 行记录一个主键值。定位时先找到大概范围再扫描。省索引空间，查询也能加速。

# 追问

- 稀疏索引和稠密索引区别？
