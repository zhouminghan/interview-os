---
id: SPARK-0212
type: technical
question: 如何优化Spark的分区策略？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分区均匀、按 key 特性选分区器。

# 参考回答

分区优化关键是分均匀，按 key 基数选 hash 或 range 分区器，热点 key 加盐。分区不均会导致倾斜。

# 追问

- 分区不均有什么表现？
