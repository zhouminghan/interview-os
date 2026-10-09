---
id: STORAGE-0247
type: technical
question: 什么是HBase的多版本并发控制(MVCC)？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

MVCC 用版本隔离读写。

# 参考回答

HBase 通过时间戳和版本号实现 MVCC，读操作看到一致快照，不被正在写的操作影响。实现读写不阻塞，保证读一致性。

# 追问

- MVCC 怎么保证一致读？
