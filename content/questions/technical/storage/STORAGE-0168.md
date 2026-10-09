---
id: STORAGE-0168
type: technical
question: 什么是Hive的查询优化器？请详细说明查询优化器的工作原理、配置方法和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

优化器做逻辑和物理优化。

# 参考回答

Hive 优化器做谓词下推、列裁剪、join 优化，CBO 基于统计信息选计划。配置开启 CBO 和向量化，统计信息收集准。

# 追问

- CBO 和 RBO 区别？
