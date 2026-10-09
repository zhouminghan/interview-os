---
id: SPARK-0056
type: technical
question: Spark的容错机制是如何实现的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠血缘重算和 checkpoint 恢复。

# 参考回答

Spark 容错靠 RDD 的血缘，某个分区丢了就从上游重新算，不用全量重来。重要数据可以 checkpoint 落盘，断点恢复更快。宽依赖的数据还会 shuffle 落盘。

# 追问

- 血缘重算和 checkpoint 哪个更快？
