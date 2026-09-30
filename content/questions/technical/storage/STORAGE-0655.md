---
id: STORAGE-0655
type: technical
question: HCatalog 的作用是什么？
difficulty: 0
topic: []
source_type: knowledge
---

Hadoop 提供了一个称为 HCatalog 的表和存储管理层。通过 HCatalog，Hive 中的用户可以使用不同的数据处理工具（如 Pig、MapReduce、Hive、Streaming 等）在网格上读写数据。通过 HCatalog，可以以任何有 SerDe 可用的格式读写文件。HCatalog 默认支持的选项有：RCFile、CSV、JSON 和 SequenceFile。在 HCatalog 中，可以以关系视图查看数据。

---
