---
id: STARROCKS-0154
type: technical
question: StarRocks 在混合云环境中如何部署？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

跨云或云加本地部署，注意网络延迟和数据同步。

# 参考回答

混合云一般是本地加云上，或多家云。要注意跨地域网络延迟、数据同步和安全。通常主集群在一地，另一地做灾备或计算弹性扩展。

# 追问

- 混合云的数据同步怎么做？
