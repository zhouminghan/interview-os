---
id: STORAGE-0387
type: technical
question: 如何处理HBase的数据一致性问题？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠 WAL、MVCC、多副本保证。

# 参考回答

一致性靠 WAL 不丢写、MVCC 一致读、多副本可靠。单行强一致，跨行最终一致，靠应用层协调。对账发现不一致就重放修复。

# 追问

- 跨行一致怎么做？
