---
id: STORAGE-0123
type: technical
question: Hive中的执行计划如何查看？请详细说明EXPLAIN命令的使用方法和执行计划的解读方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

EXPLAIN 看执行计划。

# 参考回答

用 EXPLAIN 看查询的执行计划，能看 stage、join 方式、MapJoin、分区裁剪。重点看有没有全表扫、不必要的 shuffle。是优化的第一步。

# 追问

- 执行计划里看什么？
