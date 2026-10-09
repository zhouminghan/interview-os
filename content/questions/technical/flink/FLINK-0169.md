---
id: FLINK-0169
type: technical
question: Flink多集群管理的最佳实践是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按业务隔离集群，统一平台管理。

# 参考回答

多集群管理按业务线隔离集群，用统一平台或 Operator 管理。避免互相影响，资源独立，运维统一。

# 追问

- 什么时候拆集群？
