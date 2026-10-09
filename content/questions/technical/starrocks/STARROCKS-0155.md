---
id: STARROCKS-0155
type: technical
question: StarRocks 的多租户部署方案是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用资源组和权限做租户隔离，可共享或独享集群。

# 参考回答

多租户靠资源组做资源隔离、账号权限做数据隔离。轻量租户共享一个集群，重要租户给独立资源组或独立集群。按隔离要求和成本选。

# 追问

- 共享集群和独享集群怎么选？
