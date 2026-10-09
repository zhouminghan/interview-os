---
id: STORAGE-0112
type: technical
question: 什么是Hive的UDAF？请详细说明UDAF的工作原理、开发方法和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

UDAF 是自定义聚合函数。

# 参考回答

UDAF 继承 UDAF 或 GenericUDAF，实现累加、合并、结果返回。用于自定义聚合逻辑，比如特殊去重、统计。比标量 UDF 复杂，要处理分组合并。

# 追问

- UDAF 要实现哪些方法？
