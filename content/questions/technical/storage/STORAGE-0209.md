---
id: STORAGE-0209
type: technical
question: 如何扩容Hive集群？请详细说明集群扩容的步骤、配置方法和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

加节点后数据自动均衡。

# 参考回答

扩容加 DataNode 和计算节点，HDFS 自动均衡数据。HiveServer2 加实例挂负载均衡。扩容过程平滑，不影响服务。

# 追问

- 数据均衡要多久？
