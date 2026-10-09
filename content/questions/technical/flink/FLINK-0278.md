---
id: FLINK-0278
type: technical
question: 解释FlinkSQL中的状态TTL(Time-to-Live)机制及其配置方法。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

给状态设过期时间，自动清理。

# 参考回答

状态 TTL 给聚合或 join 的状态设过期时间，超时自动清理，防止无限增长。SQL 里通过配置启用。

# 追问

- 状态不清理有什么后果？
