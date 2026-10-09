---
id: STORAGE-0179
type: technical
question: 如何恢复Hive的元数据？请详细说明恢复的方法、步骤和注意事项。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

从备份还原 Metastore 数据库。

# 参考回答

恢复元数据从备份还原 Metastore 的库，然后校验表和数据一致性。恢复后要验证表能查。注意备份版本和数据对应。

# 追问

- 恢复后怎么校验？
