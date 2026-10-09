---
id: STORAGE-0243
type: technical
question: 什么是HBase的原子性操作？如何实现？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

单行操作是原子的，跨行靠外部保证。

# 参考回答

HBase 单行内的操作是原子的，checkAndPut 能做条件原子写。跨行没有事务，要应用层或外部系统保证。计数器递增也是原子的。

# 追问

- 跨行怎么保证一致？
