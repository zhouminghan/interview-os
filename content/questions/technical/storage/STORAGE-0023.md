---
id: STORAGE-0023
type: technical
question: Hive 面试题大纲（200 题覆盖范围）
topic: [storage, hive, outline]
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Hive 200 题大纲，四篇：基础架构、SQL 数据操作、性能调优、运维故障恢复。

# 30 秒回答

基础（~15 题）：架构/Metastore/表类型/SerDe/UDF/执行流程；SQL（~40 题）：JOIN 优化/窗口/LATERAL VIEW/去重/分桶抽样；调优（~10 题）：倾斜/谓词下推/压缩/小文件/CBO；运维（~5 题）：HA/元数据备份/权限/审计。

# 1 分钟回答

- 基础：Hive 与 RDBMS 区别、Metastore/Driver/Compiler、内部/外部表、SerDe、UDF/UDAF/UDTF、SQL→AST→QueryBlock→MR 流程、动态分区、压缩、ACID
- SQL：MapJoin/Bucket MapJoin/Skew Join、窗口函数、LATERAL VIEW EXPLODE、DISTINCT vs GROUP BY、CTE、分桶抽样、多表插入
- 调优：数据倾斜、MapJoin Hint、谓词下推、ORC/Parquet、Snappy/GZip、小文件合并、CBO、列剪裁/分区剪裁
- 运维：HA、元数据备份、权限（Storage-Based/SQL-Standard）、审计、版本升级

# 追问

- 大纲里哪些点已经在题库中有带答案的版本？
