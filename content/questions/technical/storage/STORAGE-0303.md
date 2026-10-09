---
id: STORAGE-0303
type: technical
question: 解释HBase的Region定位机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ZK 找 Meta，Meta 找 Region。

# 参考回答

定位 Region 先查 ZK 得到 Meta 表位置，再查 Meta 找到 RowKey 对应 Region 和 RegionServer，然后直连。客户端缓存结果减少寻址。

# 追问

- 寻址缓存失效？
