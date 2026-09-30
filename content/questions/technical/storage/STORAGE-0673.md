---
id: STORAGE-0673
type: technical
question: ORC 格式表在 Hive 中的作用？
difficulty: 0
topic: []
source_type: knowledge
---

我们使用**优化行列表（ORC）**文件格式来在 Hive 中高效存储数据。它用于提高数据读写和处理的性能。在 ORC 格式中，可以克服其他 Hive 文件格式的限制。ORC 格式的一些优点包括：每个任务的输出是单个文件，这减少了 NameNode 上的负载。

它支持 datetime、decimal、struct、map 等复杂类型。它在文件内存储轻量级索引。可以限制读写数据时使用内存。它使用 Protocol Buffers 存储元数据，支持字段的添加/删除。

---
