---
id: STORAGE-0740
type: technical
question: Producer 中什么时候会发生 QueueFullException？
difficulty: 0
topic: []
source_type: knowledge
---

当 Producer 尝试以 broker 无法处理的速率发送消息时，通常会发生 QueueFullException。由于 Producer 不会阻塞，用户将需要添加足够的 broker 来协同处理增加的负载。

---
