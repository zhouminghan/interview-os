---
id: STORAGE-0126
type: technical
question: 如何优化Hive的查询性能？请详细说明查询优化的各个层面（SQL优化、配置优化、资源优化等）和具体方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SQL、配置、资源、存储四层面优化。

# 参考回答

SQL 优化少 join 少 distinct，配置开向量化 CBO，资源合理分配队列和并行度，存储用列式分区。层层推进，先定位再优化。

# 追问

- 最有效的优化是什么？
