---
id: STORAGE-0304
type: technical
question: HBase的数据一致性是如何保证的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

WAL、MVCC、多副本保证一致。

# 参考回答

一致性靠 WAL 保证写入不丢、MVCC 保证一致读、HDFS 多副本保证数据可靠。单行强一致，跨行最终一致。

# 追问

- HBase 是强一致吗？
