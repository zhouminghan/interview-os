---
id: STORAGE-0330
type: technical
question: 如何优化HBase的写入性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

批量写、预分区、调 MemStore。

# 参考回答

写入优化用批量 Put、预分区避免热点、合理 MemStore 大小、BulkLoad 大批量导入。WAL 可以异步或并行写。写瓶颈多在热点和 flush。

# 追问

- 写热点怎么解决？
