---
id: STORAGE-0366
type: technical
question: 如何优化HBase的读写并发？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

合理 RPC 线程和 Region 分布。

# 参考回答

读写并发优化调 RPC 线程数、合理 Region 分布、客户端批量异步。避免热点 Region 拖慢并发。资源配足。

# 追问

- 并发上不去怎么办？
