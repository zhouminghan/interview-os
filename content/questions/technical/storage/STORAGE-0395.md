---
id: STORAGE-0395
type: technical
question: 分享一个HBase的数据迁移案例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

快照加导出迁移，对账验证。

# 参考回答

数据迁移用快照加 Export 跨集群，迁移后对账行数和关键指标。迁移期间双写或停写，保证一致性。分表分批迁移。

# 追问

- 迁移怎么验证？
