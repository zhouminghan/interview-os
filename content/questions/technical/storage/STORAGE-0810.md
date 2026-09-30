---
id: STORAGE-0810
type: technical
question: 如何在 Kafka 数据生产时实现精确一次（Exactly-Once）？
difficulty: 0
topic: []
source_type: knowledge
---

1. **启用幂等性**：`enable.idempotence = true`，防止网络错误期间消息重复
2. **事务 API**：设置 `transactional.id`，使用 `beginTransaction()` / `commitTransaction()` / `abortTransaction()`
3. **正确配置**：`acks = all`，`max.in.flight.requests.per.connection = 1`
4. **一致的分区策略**：避免重试时打乱消息顺序
