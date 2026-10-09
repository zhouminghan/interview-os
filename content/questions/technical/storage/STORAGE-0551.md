---
id: STORAGE-0551
type: technical
question: Clickhouse的网络带宽优化策略有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

压缩减少传输，分布式减少跨节点。

# 参考回答

网络优化压缩数据减少传输、分布式查询减少跨节点数据传输、分片键设计合理。带宽瓶颈时开压缩。

# 追问

- 网络怎么优化？
