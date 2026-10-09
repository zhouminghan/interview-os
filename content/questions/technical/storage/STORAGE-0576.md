---
id: STORAGE-0576
type: technical
question: 如何实现Clickhouse的高可用部署？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

副本加多节点部署。

# 参考回答

高可用用副本加多节点，单节点挂了副本顶上。分布式表自动路由。ZooKeeper 集群也要高可用。副本因子 2 以上。

# 追问

- 高可用怎么做？
