---
id: FLINK-0435
type: technical
question: Kafka的消费者如何实现消息的批量处理？请说明批量处理的好处和注意事项。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

一次拉一批处理，提高吞吐。

# 参考回答

消费者一次拉一批消息批量处理，减少网络和提交开销，提高吞吐。注意批量不能太大，否则延迟和内存高，要按业务延迟调。

# 追问

- 批量大小怎么定？
