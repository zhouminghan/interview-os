---
id: SPARK-0205
type: technical
question: 如何优化Spark的sort操作？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

减少排序数据量，加 limit 或分区内排序。

# 参考回答

sort 优化尽量减少要排的数据，加 limit 做 TopN，用分区内排序替代全局排序。排序本身代价高，能省则省。

# 追问

- TopN 为什么不用全局排序？
