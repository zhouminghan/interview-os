---
id: STORAGE-0739
type: technical
question: 如何定义分区键（Partitioning Key）？
difficulty: 0
topic: []
source_type: knowledge
---

在 Producer 中，分区键（Partitioning Key）的作用是指示消息的目标分区。默认情况下，使用基于哈希的分区器（Partitioner）来根据键确定分区 ID。或者，用户也可以使用自定义分区器。

---
