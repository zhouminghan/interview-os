---
id: STORAGE-0098
type: technical
question: 如何理解Hive的CLUSTER BY？它和DISTRIBUTE BY、SORT BY有什么关系？请详细说明其使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CLUSTER BY 是 DISTRIBUTE BY 加 SORT BY 的简写。

# 参考回答

CLUSTER BY 字段等价于 DISTRIBUTE BY 字段加 SORT BY 字段，按同一字段分布并排序。注意它只能按升序，不能指定排序方向。

# 追问

- CLUSTER BY 有限制吗？
