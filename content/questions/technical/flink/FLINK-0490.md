---
id: FLINK-0490
type: technical
question: 请详细解释Kafka集群的版本升级策略，包括升级流程、回滚方案、兼容性测试等，以及如何保证升级的可靠性？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

灰度升级、滚动升级、留回滚。

# 参考回答

升级用滚动升级逐个 broker 升，先测试环境验证兼容性，再生产灰度。留回滚方案，升级前备份。别跨大版本直接跳。

# 追问

- 滚动升级怎么做？
