---
id: STORAGE-0305
type: technical
question: 详细描述HBase的批量加载过程。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

BulkLoad 直接生成 HFile 加载。

# 参考回答

批量加载用 BulkLoad，先离线生成排序好的 HFile，再直接加载到 Region，不走 WAL 和 MemStore，速度极快。适合大批量初始化导入。

# 追问

- BulkLoad 为什么不走 WAL？
