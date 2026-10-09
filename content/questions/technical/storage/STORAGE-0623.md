---
id: STORAGE-0623
type: technical
question: Clickhouse的集群迁移方案是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

备份恢复或数据同步迁移。

# 参考回答

集群迁移用 BACKUP 备份再恢复，或数据同步工具迁移。迁移前验证，迁移后对账。分批迁移减少影响。

# 追问

- 迁移怎么做？
