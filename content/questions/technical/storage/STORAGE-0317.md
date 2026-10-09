---
id: STORAGE-0317
type: technical
question: 详细描述HBase的计数器实现机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

increment 在服务端原子加。

# 参考回答

计数器用 increment，RegionServer 端直接对列值做原子加法，不用客户端读改写。避免并发读改写的冲突。适合计数统计。

# 追问

- increment 怎么原子？
