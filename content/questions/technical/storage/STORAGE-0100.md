---
id: STORAGE-0100
type: technical
question: 什么是Hive的LATERAL VIEW？请详细说明它的工作原理、使用场景和注意事项。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

LATERAL VIEW 把一行展开成多行。

# 参考回答

LATERAL VIEW 配合 explode 等 UDTF，把数组、map 字段展开成多行。用于行转列，展开复杂字段。多个 LATERAL VIEW 可以连续展开。

# 追问

- LATERAL VIEW 怎么用？
