---
id: FLINK-0150
type: technical
question: Flink作业中的并发安全问题如何处理？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

算子内共享对象要线程安全，状态用 keyed state。

# 参考回答

并发安全注意算子内的共享可变对象要线程安全，外部连接用连接池，状态用 Flink 的 keyed state 而不是自己用 HashMap。闭包里的静态变量要小心。

# 追问

- 为什么别自己用 HashMap 存状态？
