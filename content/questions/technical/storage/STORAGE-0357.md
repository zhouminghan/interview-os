---
id: STORAGE-0357
type: technical
question: 如何优化HBase的数据导入性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 BulkLoad，批量写入。

# 参考回答

数据导入用 BulkLoad 直接加载 HFile 最快，或批量 Put 提高吞吐。预分区避免热点。大批量初始化优先 BulkLoad。

# 追问

- BulkLoad 流程？
