---
id: STORAGE-0068
type: technical
question: 什么是Hive的查询计划？请详细说明查询计划的生成过程、优化策略、查看方法和解读技巧。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

查询计划是 SQL 到执行任务的转换结果。

# 参考回答

查询计划把 SQL 解析优化后转成执行阶段，用 EXPLAIN 查看。看计划里的 join 方式、stage 数、分区裁剪、MapJoin，定位性能问题。

# 追问

- EXPLAIN 怎么解读？
