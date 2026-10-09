---
id: STORAGE-0208
type: technical
question: 什么是Hive的扩容方案？请详细说明扩容方案的设计方法、实施步骤和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

加节点、扩存储和计算资源。

# 参考回答

扩容加 DataNode 扩存储、加计算节点扩算力，HiveServer2 和 Metastore 也按需加实例。按数据增长和查询负载规划。

# 追问

- 扩容注意什么？
