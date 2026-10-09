---
id: STORAGE-0277
type: technical
question: HBase的读取流程是怎样的？请详细解释。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

先缓存后磁盘，合并返回。

# 参考回答

读取流程：先查 BlockCache，再查 MemStore，最后查 HFile，把多版本合并去重后返回。Bloom Filter 和 BlockCache 减少磁盘读。

# 追问

- 读为什么先查缓存？
