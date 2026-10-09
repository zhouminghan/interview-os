---
id: STORAGE-0206
type: technical
question: 什么是Hive的容灾方案？请详细说明容灾方案的设计方法、实施步骤和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

元数据灾备加数据跨集群同步。

# 参考回答

容灾方案：Metastore 数据库做灾备，数据靠 HDFS 副本和跨集群同步。主集群故障切灾备。定期演练，保证可恢复。

# 追问

- 容灾和备份区别？
