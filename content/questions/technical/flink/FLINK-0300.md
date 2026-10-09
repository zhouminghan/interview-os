---
id: FLINK-0300
type: technical
question: 如何在同一个应用中混合使用SQL和其他Flink API？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SQL 和 DataStream 用互转接口混合。

# 参考回答

一个应用里可以先 DataStream 做复杂转换，转成表用 SQL 聚合，再转回 DataStream 输出。用 fromDataStream 和 toDataStream 串起来，取长补短。

# 追问

- 混合使用有什么坑？
