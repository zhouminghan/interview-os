---
id: FLINK-0458
type: technical
question: 请详细说明Kafka的故障恢复机制，包括Broker故障、网络故障等场景下的恢复流程，以及如何保证服务的可用性。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

副本自动接管，broker 恢复后补数据。

# 参考回答

Broker 故障时副本自动选新 leader 接管，服务不中断。故障 broker 恢复后重新加入，补齐缺失副本。副本因子够就不丢数据。

# 追问

- 副本因子不够会怎样？
