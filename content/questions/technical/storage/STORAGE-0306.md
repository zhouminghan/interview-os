---
id: STORAGE-0306
type: technical
question: HBase的列族存储实现原理是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按列族分 Store 存。

# 参考回答

每个列族在 Region 里对应一个 Store，Store 有自己的 MemStore 和 HFile。所以列族是物理存储单元，列族多了内存和文件多，不建议太多。

# 追问

- 列族为什么是物理单元？
