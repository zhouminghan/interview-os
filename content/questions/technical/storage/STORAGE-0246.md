---
id: STORAGE-0246
type: technical
question: HBase中的计数器(Counter)功能如何使用？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

increment 做原子计数。

# 参考回答

计数器用 increment 操作，对某个列的值做原子累加，不用读出来再写。适合计数、统计场景，比如 PV、UV 计数。单行原子递增。

# 追问

- increment 为什么原子？
