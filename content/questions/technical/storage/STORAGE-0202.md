---
id: STORAGE-0202
type: technical
question: 什么是Hive的备份策略？请详细说明备份策略的制定方法、实施步骤和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

元数据备份加数据多副本。

# 参考回答

备份策略：元数据定期备份，数据靠 HDFS 多副本或跨集群同步。按重要度定备份频率。定期演练恢复。

# 追问

- 备份频率怎么定？
