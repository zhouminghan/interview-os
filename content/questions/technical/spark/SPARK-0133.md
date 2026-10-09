---
id: SPARK-0133
type: technical
question: Spark SQL的窗口函数有哪些？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

row_number、rank、lag、sum over 这些。

# 参考回答

窗口函数有排序类的 row_number、rank、dense_rank，偏移类的 lag、lead，聚合类的 sum、avg over。用于 TopN、环比、累计。

# 追问

- rank 和 dense_rank 的区别？
