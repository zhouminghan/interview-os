---
id: STORAGE-0205
type: technical
question: 如何恢复Hive的数据？请详细说明数据恢复的方法、步骤和注意事项。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

从副本或备份还原数据。

# 参考回答

数据恢复从 HDFS 副本或灾备集群拷回，配合元数据还原。恢复后对账验证行数和关键指标。注意恢复期间别写数据。

# 追问

- 恢复后怎么验证？
