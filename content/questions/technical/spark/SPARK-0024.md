---
id: SPARK-0024
type: technical
question: 有没有调整过任务并行度、输出文件数量
topic: [spark, parallelism, files]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-26-xpeng-data-dev
    company: 小鹏
    position: 数据开发（27 届秋招一面）
    date: 2026-09-26
---

# 一句话

并行度调 shuffle 分区数，输出文件数调 coalesce/repartition，目标是均衡负载和减少小文件。

# 30 秒回答

并行度用 spark.sql.shuffle.partitions 调整；输出文件数用 coalesce/repartition 控制，减少小文件；结合 AQE 动态合并分区。

# 1 分钟回答

- 并行度：shuffle 分区数匹配数据量和资源
- 文件数：coalesce（不 shuffle）合并、repartition（可增可减）
- 小文件：控制输出分区数、合并写入
- AQE：动态合并小分区

# 追问

- coalesce 和 repartition 区别？
- 并行度怎么定才合理？
