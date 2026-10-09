---
id: STORAGE-0073
type: technical
question: 如何理解Hive的查询性能优化？请详细说明性能优化的各个层面、具体方法和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

存储、SQL、参数、资源四个层面优化。

# 参考回答

性能优化从存储用列式加分区，SQL 减少 join 和 shuffle，参数开向量化 CBO，资源合理分配。先定位慢在哪，再针对性优化，别盲调。

# 追问

- 四个层面怎么排序？
