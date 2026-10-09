---
id: FLINK-0459
type: technical
question: 在Kafka集群中，如何实现消息的延迟处理？请详细说明延迟队列的设计和实现方式。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用延迟 topic 或消费端定时任务实现。

# 参考回答

延迟处理可以用专门的延迟 topic，按延迟时间分桶，到点再消费；或消费端拿到消息后延迟执行。Kafka 本身无延迟队列，靠应用实现。

# 追问

- 延迟消息怎么保证可靠？
