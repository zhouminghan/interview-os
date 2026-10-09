---
id: FLINK-0184
type: technical
question: 某电商平台如何使用Flink构建实时数据分析系统？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink 实时算 GMV、用户行为、库存。

# 参考回答

电商用 Flink 从订单和埋点流实时算 GMV、用户行为分析、库存预警，写 Doris 供看板。典型是 Flink 加 Kafka 加 Doris。

# 追问

- 电商实时大屏的链路？
