---
id: STORAGE-0255
type: technical
question: 什么是HBase的Region合并？什么情况下需要合并？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Region 合并把小的 Region 合到一起。

# 参考回答

Region 合并把数据量小的相邻 Region 合并，减少 Region 数量，降低元数据和调度开销。删了大量数据后 Region 变小，可以合并。

# 追问

- 什么时候合并 Region？
