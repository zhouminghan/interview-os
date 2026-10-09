---
id: STORAGE-0602
type: technical
question: Clickhouse的集群负载均衡如何实现？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分片分布查询，负载均衡器分发连接。

# 参考回答

负载均衡靠分片均匀分布查询，前面用 LB 分发客户端连接。分片键设计均匀，避免热点分片。

# 追问

- 负载均衡怎么做？
