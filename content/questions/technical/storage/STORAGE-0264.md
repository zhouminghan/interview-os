---
id: STORAGE-0264
type: technical
question: HBase中的Region负载均衡是如何实现的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Master 按负载重新分配 Region。

# 参考回答

负载均衡由 Master 的均衡器定期运行，把 Region 从负载高的 RegionServer 迁到低的，保持各节点 Region 数量和负载均衡。

# 追问

- 均衡会中断服务吗？
