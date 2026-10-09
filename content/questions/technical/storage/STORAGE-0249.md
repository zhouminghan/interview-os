---
id: STORAGE-0249
type: technical
question: 解释HBase中的Bloom Filter的作用。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Bloom Filter 判断某行是否存在，减少无效读。

# 参考回答

Bloom Filter 在 HFile 里快速判断某个 RowKey 是否可能存在，不存在的直接跳过，减少磁盘读。适合点查多的场景，按行或行列建。

# 追问

- Bloom Filter 会误判吗？
