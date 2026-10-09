---
id: STORAGE-0583
type: technical
question: 什么是Clickhouse的熔断机制？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

异常时拒绝请求保护集群。

# 参考回答

熔断机制在资源超限或异常时拒绝新请求，防止雪崩。配置内存、并发阈值。保护集群稳定，避免单个问题拖垮。

# 追问

- 熔断怎么配？
