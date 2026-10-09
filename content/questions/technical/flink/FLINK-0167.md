---
id: FLINK-0167
type: technical
question: Flink在微服务架构中的应用模式是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink 做实时数据服务，微服务做业务。

# 参考回答

微服务里 Flink 负责实时数据处理，通过 Kafka 或 REST 和微服务交互。Flink 不是微服务，但能作为数据服务提供实时结果。

# 追问

- Flink 和微服务怎么交互？
