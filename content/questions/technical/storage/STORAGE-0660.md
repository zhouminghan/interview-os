---
id: STORAGE-0660
type: technical
question: 什么是 Hive 中的分桶（Bucketing）？
difficulty: 0
topic: []
source_type: knowledge
---

通过 Hive 中的分桶，可以将数据集划分为可管理的部分。它类似于哈希。即使数据集的大小不同，我们仍然可以有固定数量的桶。此外，通过分桶，可以在 Hive 中执行 map 端连接。例如，假设有一个以日期为一级分区、user_id 为二级分区的表。日期的分区数可能较少，但 user_id 的分区数可能很大。如果有数百万用户，就会有数百万个二级分区和文件。为避免创建这么多分区，可以对 user_id 进行分桶而不是分区。通过分桶，可以使用 HASH 函数将不同的 user_id 放入不同的桶中，为 user_id 值创建可管理数量的桶。

---
