---
id: STORAGE-0203
type: technical
question: 如何备份Hive的数据？请详细说明数据备份的方法、工具和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

HDFS 多副本或跨集群同步。

# 参考回答

数据备份靠 HDFS 多副本，或用 distcp、跨集群同步工具备份到异地。元数据单独备份。重要数据定期同步灾备集群。

# 追问

- 跨集群同步用什么？
