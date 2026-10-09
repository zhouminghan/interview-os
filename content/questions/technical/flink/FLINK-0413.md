---
id: FLINK-0413
type: technical
question: 解释电商行业中FlinkSQL的典型应用场景及实践案例。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实时 GMV、用户行为、实时大屏。

# 参考回答

电商用 Flink SQL 做实时 GMV、订单、用户行为分析、实时大屏。数据量大、维度多、要实时，典型链路是 Flink 加 Kafka 加 Doris。

# 追问

- 电商实时大屏怎么搭？
