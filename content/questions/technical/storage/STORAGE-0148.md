---
id: STORAGE-0148
type: technical
question: 什么是Hive的锁机制？请详细说明锁的类型、工作原理和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

锁防止并发写冲突。

# 参考回答

Hive 有共享锁和排他锁，写表时加锁防止并发冲突。并发读不锁，写和写互斥。锁会带来等待，大批量写要注意锁竞争。

# 追问

- 锁冲突怎么办？
