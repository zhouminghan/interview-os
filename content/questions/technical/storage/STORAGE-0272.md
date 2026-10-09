---
id: STORAGE-0272
type: technical
question: HBase中的Region分配策略有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按负载、本地性、随机分配。

# 参考回答

Region 分配策略有随机、轮询、按负载。默认按负载均衡，考虑数据本地性。分配目标是 Region 均匀分布，避免热点 RegionServer。

# 追问

- 分配策略怎么选？
