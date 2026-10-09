---
id: SPARK-0115
type: technical
question: 如何对DataFrame进行分区？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

repartition 或 coalesce 调整分区数。

# 参考回答

DataFrame 分区用 repartition 或 coalesce 调，repartition 会 shuffle 但能增能减，coalesce 只能减且尽量不 shuffle。分区数影响并行度。

# 追问

- 增分区和减分区分别用什么？
