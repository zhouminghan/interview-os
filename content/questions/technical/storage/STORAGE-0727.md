---
id: STORAGE-0727
type: technical
question: 如何在 Kafka 数据生产时实现精确一次（Exactly-Once）消息传递？
difficulty: 0
topic: []
source_type: knowledge
---

1. **启用幂等性**：将生产者配置为幂等的，设置 `enable.idempotence` 为 `true`。这确保消息在网络错误期间不会被重复。

2. **事务 API**：通过在生产者上启动事务来使用 Kafka 的事务 API。这涉及设置 `transactional.id` 配置，并使用 `beginTransaction()`、`commitTransaction()` 和 `abortTransaction()` 方法来管理事务。它确保事务中的所有消息都成功发布，或者在失败时一条也不发布，从而实现精确一次语义。

3. **正确配置**：在启用幂等性的同时，将 `acks` 调整为 `all`（或 `-1`），以确保所有副本都确认消息，并设置适当的 `retries` 和 `max.in.flight.requests.per.connection`（使用事务时应为 `1`），以在不重复消息的情况下处理重试。

4. **一致的分区策略**：如果顺序很重要，确保消息被一致地分区。这可能涉及自定义分区策略，以避免在重试时打乱分区间的消息。

---
