---
id: STORAGE-0345
type: technical
question: 如何处理HBase的热点问题？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RowKey 加盐、预分区分散。

# 参考回答

热点是某个 Region 读写特别多。用 RowKey 加盐、hash 预分区分散。避免递增 RowKey。观察 Region 的读写分布定位热点。

# 追问

- 怎么发现热点？
