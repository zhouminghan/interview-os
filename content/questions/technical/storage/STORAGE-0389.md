---
id: STORAGE-0389
type: technical
question: 分享一个HBase的数据导入导出案例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

BulkLoad 导入，快照导出。

# 参考回答

导入用 BulkLoad 生成 HFile 直接加载，比逐条 Put 快几十倍。导出用快照或 Export 工具。迁移场景快照加导出最方便。

# 追问

- 导入导出工具怎么选？
