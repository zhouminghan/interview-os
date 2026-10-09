---
id: STORAGE-0302
type: technical
question: HBase的原子性操作是如何保证的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

单行操作天然原子。

# 参考回答

单行内的 put、delete、checkAndPut 是原子的，因为写单行由锁和 MVCC 保证。跨行没有事务，靠应用层或外部协调保证。

# 追问

- 为什么只保证单行？
