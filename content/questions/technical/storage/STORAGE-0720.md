---
id: STORAGE-0720
type: technical
question: 传统的消息传输方式是什么？
difficulty: 0
topic: []
source_type: knowledge
---

传统的消息传输方式包括两种方法：
- **队列**：在队列模式中，一组消费者从服务器读取消息，每条消息只发给其中一个消费者。
- **发布-订阅**：在这个模型中，消息被广播给所有消费者。

Kafka 提供了一种统一的消费者抽象，将以上两者通用化——即消费者组（consumer group）。

---
