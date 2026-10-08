---
id: SPARK-0028
type: technical
question: Hive 和 Spark 最大的区别是什么
topic: [spark, hive]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-08-31-bytedance-bigdata
    company: 字节跳动
    position: 大数据开发（一面）
    date: 2026-08-31
  - interview_id: INTERVIEW-2026-09-28-bytedance-fandouyin-liangjing
    company: 字节跳动
    position: 数据开发（泛抖音，校招一面凉经）
    date: 2026-09-28
---

# 一句话

Hive 是数仓 SQL 抽象，Spark 是通用内存计算引擎；Hive 可以用 Spark 作为执行引擎。

# 30 秒回答

Hive 把 SQL 翻译成 MapReduce/Tez/Spark 作业，偏数仓批处理；Spark 是基于内存的 DAG 计算引擎，RDD/DataFrame，比 MR 快，支持批流、机器学习等。

# 1 分钟回答

- Hive：数仓工具，SQL -> MR/Tez/Spark，适合离线批处理
- Spark：通用计算引擎，内存计算、DAG 复用、批流一体
- 关系：Hive on Spark 是常见组合
- 性能：Spark 比 Hive on MR 快很多

# 追问

- Hive on Spark 和 Spark SQL 区别？
- Spark 为什么比 MR 快？
