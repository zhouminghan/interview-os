---
id: STORAGE-0788
type: technical
question: HCatalog 的作用和数据模型
difficulty: 0
topic: []
source_type: knowledge
---

HCatalog 为 Hive 元数据提供读写 API，让 MapReduce/Pig/Spark 等工具共享 Hive 表定义。数据模型：基于 Hive Metastore 的数据库/表/分区模型。
