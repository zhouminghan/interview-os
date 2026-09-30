---
id: STORAGE-0634
type: technical
question: Hive 在 Hadoop 生态中的作用是什么？
difficulty: 0
topic: []
source_type: knowledge
---

Hive 提供了一个类似 SQL 的接口来与存储在 Hadoop 生态系统中的数据交互。可以在 Hive 中创建表并将数据存储到其中。Hive 还用于映射和处理 HBase 表。在底层，Hive 查询被转换为 MapReduce 作业。因此 Hive 隐藏了创建和运行 MapReduce 作业相关的复杂性。

---
