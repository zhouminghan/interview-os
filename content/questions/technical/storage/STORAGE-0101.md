---
id: STORAGE-0101
type: technical
question: 如何理解Hive的EXPLODE函数？请详细说明它的工作原理、使用场景和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

EXPLODE 把数组或 map 展开成多行。

# 参考回答

EXPLODE 是表生成函数，把 array 每个元素展开成一行，map 展开成键值行。配合 LATERAL VIEW 用。数据量会放大，注意性能。

# 追问

- EXPLODE 后数据量怎么变？
