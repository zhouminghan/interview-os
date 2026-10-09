---
id: SPARK-0124
type: technical
question: 如何优化Spark SQL查询性能？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看执行计划，用谓词下推、列剪裁、broadcast、调参数。

# 参考回答

优化 SQL 先用 explain 看执行计划，找全表扫和大 shuffle，再靠谓词下推、列剪裁、小表 broadcast、合理分区分桶。AQE 也能自动优化很多。

# 追问

- explain 里重点看什么？
