---
id: STORAGE-0807
type: technical
question: 什么时候 broker 会离开 ISR？
difficulty: 0
topic: []
source_type: knowledge
---

- **落后**：副本落后 leader 超过 `replica.lag.time.max.ms` 或 `replica.lag.max.messages`
- **Broker 故障**：broker 崩溃或断开连接
- **手动干预**：管理员手动移除（不常见）
