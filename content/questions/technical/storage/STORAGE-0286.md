---
id: STORAGE-0286
type: technical
question: HBase的Region寻址过程是怎样的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ZK 找 Meta，Meta 找 Region。

# 参考回答

寻址流程：客户端先查 ZK 得到 Meta 表位置，再查 Meta 表找到目标 RowKey 所在的 Region 和 RegionServer，最后连 RegionServer 读写。

# 追问

- 寻址要几次 RPC？
