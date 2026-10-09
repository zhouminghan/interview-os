---
id: STORAGE-0033
type: technical
question: Hive中的桶（Bucket）是什么？它和分区有什么区别？请详细说明桶的概念、设计原则、使用场景和性能优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分桶按 hash 把数据分到多个文件，分区按目录。

# 参考回答

分桶把数据按某字段 hash 分到固定数量的桶文件，分区是分目录。分桶适合 join 和采样，分桶键选高基数均匀的。分区分桶常配合用。

# 追问

- 分桶和分区怎么配合？
