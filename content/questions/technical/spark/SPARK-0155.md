---
id: SPARK-0155
type: technical
question: Spark Streaming的背压机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

消费慢时降低接收速率，防止数据积压。

# 参考回答

背压是当处理跟不上时，自动降低数据接收速率，避免内存爆。配置 spark.streaming.backpressure.enabled 开启，按处理时长动态调整。

# 追问

- 背压靠什么指标判断？
