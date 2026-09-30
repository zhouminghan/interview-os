---
id: FLINK-0642
type: technical
question: 你选择 Iceberg 作为实时数据湖的原因是什么？相比 Hudi 的优势在哪？
difficulty: 0
topic: []
source_type: knowledge
---

选 Iceberg 的核心理由：

| 维度 | Iceberg | Hudi |
|------|---------|------|
| **写入并发** | 乐观并发控制，高并发写入冲突少 | 需要额外的 lock provider |
| **Schema 演进** | 原生支持列增删改、分区演进 | 支持但限制更多 |
| **查询引擎兼容** | Flink/Spark/Trino/Presto 全支持 | 主要对 Spark 友好 |
| **分区裁剪** | 隐式分区（Hidden Partitioning），SQL 不需要写分区字段 | 需要显式指定 |
| **社区活跃度** | Apache 顶级项目，腾讯内部也有大量实践 | 社区活跃但生态偏 Spark |

我们的场景：Flink 流式写入 + Spark 离线批量读取 + Presto Ad-hoc 查询，Iceberg 的多引擎兼容性是决定性因素。

---
