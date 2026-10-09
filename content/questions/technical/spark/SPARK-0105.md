---
id: SPARK-0105
type: technical
question: 如何对DataFrame进行分组聚合？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

groupBy 加 agg 做分组统计。

# 参考回答

分组聚合用 groupBy 指定分组列，再 agg 里写 sum、count、avg、max 这些聚合函数。多列分组就 groupBy 多列。结果是一个新 DataFrame。

# 追问

- groupBy 会产生 shuffle 吗？
