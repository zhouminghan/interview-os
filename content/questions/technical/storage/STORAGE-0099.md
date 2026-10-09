---
id: STORAGE-0099
type: technical
question: Hive中的窗口函数有哪些？请详细说明各种窗口函数（如ROW\_NUMBER、RANK、DENSE\_RANK等）的使用方法和场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

排名、偏移、聚合三类窗口函数。

# 参考回答

窗口函数有排名类 row_number、rank、dense_rank，偏移类 lag、lead，聚合类 sum over。用于分组 TopN、环比、累计值。row_number 不重复，rank 会跳跃，dense_rank 连续。

# 追问

- rank 和 dense_rank 区别？
