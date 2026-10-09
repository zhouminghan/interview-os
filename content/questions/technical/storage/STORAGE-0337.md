---
id: STORAGE-0337
type: technical
question: 详细讲解HBase的批量操作性能优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

批量一次提交多条，减少 RPC。

# 参考回答

批量操作一次提交多条 Put、Get，减少网络往返。批量大小要适中，太大内存高、失败重试多。大批量导入用 BulkLoad。

# 追问

- 批量大小怎么定？
