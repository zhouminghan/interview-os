---
id: FLINK-0491
type: technical
question: 在Kafka集群中，如何实现集群的配置管理？请详细说明配置项、配置更新、配置验证等过程，以及如何保证配置的一致性？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配置集中管理，变更走流程验证。

# 参考回答

配置管理用配置中心统一管理，变更前验证、走审批，变更后生效并确认一致性。关键配置改动要滚动重启生效。

# 追问

- 配置变更怎么验证？
