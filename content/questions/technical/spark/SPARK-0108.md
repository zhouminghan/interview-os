---
id: SPARK-0108
type: technical
question: 如何对DataFrame进行窗口操作？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Window 定义分区和排序，再套聚合函数。

# 参考回答

窗口操作先定义 Window.partitionBy 加 orderBy，再配合 row_number、lag、sum 这些。用于分组 TopN、累计值、环比这类行间计算。

# 追问

- 窗口函数会 shuffle 吗？
