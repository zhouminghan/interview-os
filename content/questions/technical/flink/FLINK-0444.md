---
id: FLINK-0444
type: technical
question: Kafka的消费者如何实现消息的批量提交？请说明批量提交的好处和注意事项。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

攒一批消息一起提交 offset。

# 参考回答

批量提交是把一批消息处理完再提交 offset，减少提交频率提高吞吐。注意别提交太频繁或太少，太频繁开销大，太少重启重复多。

# 追问

- 批量提交和单条提交怎么选？
