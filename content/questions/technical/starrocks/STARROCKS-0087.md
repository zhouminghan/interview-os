---
id: STARROCKS-0087
type: technical
question: StarRocks 的备份与恢复策略有哪些？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用快照、导出或副本做备份，恢复靠重放或副本。

# 参考回答

备份一般用快照备份元数据和数据，或导出到外部存储。恢复就是反向导入。多副本本身也算一种容灾，但防误删还得靠真正的备份。

# 追问

- 快照和导出备份的区别？
