---
id: STORAGE-0316
type: technical
question: HBase的Region分配算法实现原理是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按负载和本地性分配 Region。

# 参考回答

Region 分配算法按 RegionServer 负载、Region 数据本地性选目标节点，目标是均衡和本地读。分配由 Master 调度，Region 分裂和故障触发重分配。

# 追问

- 分配考虑什么？
