---
id: FLINK-0441
type: technical
question: Kafka的消费者如何实现消息的重试机制？请说明重试的几种方式和各自的优缺点。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

消费失败重试或投递到重试队列。

# 参考回答

重试可以本地重试处理，或把失败消息发到重试 topic 稍后再消费。本地重试简单但可能阻塞，重试队列解耦但要维护。注意别死循环。

# 追问

- 重试怎么避免死循环？
