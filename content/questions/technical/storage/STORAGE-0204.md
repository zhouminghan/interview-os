---
id: STORAGE-0204
type: technical
question: 什么是Hive的恢复策略？请详细说明恢复策略的制定方法、实施步骤和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

从备份恢复元数据和数据。

# 参考回答

恢复策略分元数据恢复和数据恢复。元数据还原 Metastore 库，数据从副本或灾备恢复。恢复后校验一致性。定期演练。

# 追问

- 恢复怎么演练？
