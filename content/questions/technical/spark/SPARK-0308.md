---
id: SPARK-0308
type: technical
question: Hive on Spark 架构是什么？日常用 Hive 还是 Spark？（高频⭐⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：美团-大数据开发-20260415 Q5、字节-国际化数据开发-20250303 Q4、字节跳动-交易与广告-20260415 Q1

THive 做存储和元数据管理，Spark 做计算引擎。日常写的是 HiveQL 语法，实际计算由 Spark 执行。SQL 层面 Hive 更熟（窗口函数、复杂 JOIN），执行引擎层面用 Spark 的知识做优化（Spark UI、Stage 分析、Shuffle 调优）。

---
