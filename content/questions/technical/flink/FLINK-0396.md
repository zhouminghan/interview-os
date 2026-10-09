---
id: FLINK-0396
type: technical
question: 如何设计高可用、高性能的FlinkSQL作业集群架构？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

多 JobManager HA、资源隔离、监控告警。

# 参考回答

高可用高性能集群配多 JobManager 加 ZooKeeper，资源组隔离不同作业，checkpoint 存可靠存储，配监控告警。K8s 或 YARN 统一资源管理。

# 追问

- 高可用怎么配置？
