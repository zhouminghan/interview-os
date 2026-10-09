---
id: STORAGE-0236
type: technical
question: 什么是HBase的BlockCache？它的作用是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

BlockCache 缓存读到的数据块，加速读。

# 参考回答

BlockCache 是读缓存，把从 HFile 读出的数据块缓存到内存，下次读直接命中，不用再读磁盘。分 Lru 和 Bucket 两种策略，是 HBase 读性能的关键。

# 追问

- BlockCache 和 MemStore 区别？
