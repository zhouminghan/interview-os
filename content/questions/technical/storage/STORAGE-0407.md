---
id: STORAGE-0407
type: technical
question: 分享一个HBase的数据一致性处理案例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

对账发现不一致，重放修复。

# 参考回答

一致性案例：下游发现数据不一致，对账定位到某段数据丢失，通过重放 WAL 或从副本修复。根因是配置错误，修正后恢复。

# 追问

- 不一致怎么发现？
