---
id: STORAGE-0749
type: technical
question: Hive 数据模型中有哪些组件？
difficulty: 0
topic: []
source_type: knowledge
---

- **表（Tables）**：类似 RDBMS 表，存储在 HDFS
- **分区（Partitions）**：按分区键组织数据，优化查询
- **分桶（Buckets）**：分区内按列哈希进一步划分
