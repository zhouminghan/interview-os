---
id: STORAGE-0319
type: technical
question: 解释HBase的Bloom Filter实现机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

哈希位图快速判断存在性。

# 参考回答

Bloom Filter 用多个哈希映射到位图，判断 RowKey 是否存在。不存在的直接跳过 HFile，减少磁盘读。会误判存在但不会漏判。

# 追问

- Bloom Filter 误判影响？
