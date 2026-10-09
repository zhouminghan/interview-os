---
id: STORAGE-0048
type: technical
question: 解释一下Hive的查询优化器。请详细说明优化器的工作原理、优化策略、配置方法和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

优化器做逻辑和物理优化。

# 参考回答

Hive 优化器做谓词下推、列裁剪、join 顺序优化、MapJoin 这些，CBO 基于统计信息选最优计划。配置开启 CBO 和向量化，统计信息要收集准。

# 追问

- CBO 依赖什么？
