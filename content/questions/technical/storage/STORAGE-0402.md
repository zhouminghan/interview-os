---
id: STORAGE-0402
type: technical
question: 如何处理HBase的大批量数据导入？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 BulkLoad 导入。

# 参考回答

大批量导入用 BulkLoad，先生成 HFile 再加载，不走 WAL 和 MemStore，速度快。分批生成 HFile，控制内存。预分区避免热点。

# 追问

- BulkLoad 流程？
