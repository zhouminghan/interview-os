---
id: STORAGE-0376
type: technical
question: 如何处理HBase在生产环境中的数据迁移？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

快照或导出导入迁移。

# 参考回答

数据迁移用快照加 Export 跨集群，或 BulkLoad 导入。迁移前验证数据一致性，迁移后对账。控制迁移期间对业务的影响。

# 追问

- 迁移怎么验证？
