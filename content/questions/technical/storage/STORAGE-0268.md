---
id: STORAGE-0268
type: technical
question: HBase中的数据导入导出工具有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

BulkLoad、ImportTsv、Export、Snapshot。

# 参考回答

导入有 BulkLoad、ImportTsv，导出有 Export、Snapshot。BulkLoad 直接生成 HFile 加载，最快。跨集群用 Snapshot 加 Export。

# 追问

- BulkLoad 为什么快？
