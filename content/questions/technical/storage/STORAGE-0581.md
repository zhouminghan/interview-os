---
id: STORAGE-0581
type: technical
question: Clickhouse的备份与恢复策略有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

文件备份或快照备份。

# 参考回答

备份用 BACKUP 命令或文件系统快照，数据目录和元数据一起备。恢复从备份还原。定期备份并验证。

# 追问

- 备份恢复怎么做？
