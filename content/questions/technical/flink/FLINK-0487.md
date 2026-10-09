---
id: FLINK-0487
type: technical
question: 在Kafka集群中，如何实现集群的扩容和缩容？请详细说明扩容流程、数据迁移、负载均衡等过程，以及如何保证服务的可用性？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

加 broker 后重分配分区，缩容迁移数据。

# 参考回答

扩容加 broker，做分区重分配均衡负载；缩容先迁移分区再下线 broker。过程要平滑，保证服务不中断。用工具做重分配。

# 追问

- 缩容怎么保证不丢数据？
