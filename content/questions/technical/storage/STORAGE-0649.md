---
id: STORAGE-0649
type: technical
question: Apache Hive 的主要局限性有哪些？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Hive 是 Hadoop 生态系统中流行的工具。Hive 的一些局限性如下：

- **OLTP**：Hive 不能用于 OLTP 应用，因为它不支持记录级别的 update、insert 语句。
- **数据仓库**：Hive 更适合大数据上的数据仓库应用。
- **延迟**：由于启动时的开销，Hive 查询比 SQL 有更高的延迟。
- **面向批处理**：Hive 主要用于面向批处理的用例。
- **OLAP**：对于在线分析处理（OLAP），可以使用 Hive。也可以将 HBase 用于 OLAP 处理。

---
