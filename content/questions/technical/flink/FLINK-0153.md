---
id: FLINK-0153
type: technical
question: 如何分析和优化Flink作业的执行计划？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看执行图找瓶颈算子和 shuffle。

# 参考回答

执行计划看 Flink UI 的执行图，找数据量大的边、shuffle 多的算子、反压节点。优化就是减少 shuffle 和瓶颈算子开销。

# 追问

- 执行图里怎么看数据量？
