---
id: STORAGE-0038
type: technical
question: 解释一下Hive的查询执行过程。请详细说明从SQL到MapReduce任务的转换过程、执行流程和优化机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SQL 解析成执行计划，再翻译成计算任务。

# 参考回答

Hive 查询过程：SQL 解析成语法树，做语义分析和优化，生成执行计划，再翻译成 MapReduce 或 Spark 任务执行。优化器做谓词下推、列裁剪、join 优化这些。

# 追问

- Hive 优化器做什么？
