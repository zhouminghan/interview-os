---
id: STORAGE-0656
type: technical
question: HCatalog 的数据模型是什么？
difficulty: 0
topic: []
source_type: knowledge
---

HCatalog 具有与 Hive 相同的数据类型。可以在 HCatalog 中创建表来存储数据。这些表可以放置在数据库中。也可以基于哈希对 HCatalog 表进行分区。HCatalog 分区中有多个维度，分区中有记录。一旦创建了分区，就无法向其添加或删除记录。记录被划分为列，每列都有名称和数据类型。总体来说，HCatalog 数据模型类似于关系数据模型。

---
