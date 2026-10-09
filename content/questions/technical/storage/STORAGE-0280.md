---
id: STORAGE-0280
type: technical
question: RegionServer的工作机制是什么？包含哪些重要组件？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RegionServer 管 Region 的读写。

# 参考回答

RegionServer 管理多个 Region，包含 WAL、BlockCache、MemStore、StoreFile。负责数据的读写、flush、compact、split。是数据操作的核心节点。

# 追问

- RegionServer 挂了怎么办？
