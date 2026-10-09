---
id: SPARK-0159
type: technical
question: Spark Streaming的容错恢复机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

从 checkpoint 恢复状态和 offset，重放未处理数据。

# 参考回答

恢复靠 checkpoint 里的配置和 offset，重启后从上次位置继续。Direct Kafka 从保存的 offset 消费，保证不丢不重，配合幂等输出。

# 追问

- 怎么保证不丢不重？
