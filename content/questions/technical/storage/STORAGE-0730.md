---
id: STORAGE-0730
type: technical
question: 什么时候 broker 会离开 ISR？
difficulty: 0
topic: []
source_type: knowledge
---

broker 可能会在以下几种情况下离开 ISR：

- **落后**：如果一个副本落后于 leader 超过配置的阈值（`replica.lag.time.max.ms` 或 `replica.lag.max.messages`），它会从 ISR 中移除。

- **Broker 故障**：如果一个 broker 崩溃或以其他方式与集群断开连接，其副本将从 ISR 中移除。

- **手动干预**：管理员可以手动从 ISR 中移除一个副本，虽然这不是常见做法，应谨慎进行。

---
