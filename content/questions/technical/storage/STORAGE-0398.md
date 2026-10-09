---
id: STORAGE-0398
type: technical
question: 分享一个HBase的数据恢复案例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

从快照恢复表，校验数据。

# 参考回答

数据恢复从快照重建表，或从灾备集群还原。恢复后校验行数和关键字段。快照恢复比逐条导入快很多。

# 追问

- 恢复后怎么校验？
