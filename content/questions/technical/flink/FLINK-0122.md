---
id: FLINK-0122
type: technical
question: 如何优化Flink的数据交换策略？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

减少 shuffle、用 forward、rebalance 等策略。

# 参考回答

数据交换策略有 forward、keyBy、rebalance、broadcast。优化是减少跨节点传输，用 forward 本地传递，keyBy 时才 shuffle。

# 追问

- forward 和 rebalance 的区别？
