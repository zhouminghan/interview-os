---
id: FLINK-0456
type: technical
question: 请详细解释Kafka的负载均衡机制，包括分区重分配、副本重分配等过程，以及如何优化集群的负载分布。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分区和副本重新分配均衡负载。

# 参考回答

负载均衡靠分区和副本重新分配到不同 broker，避免热点。加 broker 后做 rebalance，把分区均匀分过去。Kafka 也有自动均衡机制。

# 追问

- 重分配会中断服务吗？
