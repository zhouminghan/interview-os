---
id: SPARK-0029
type: technical
question: 数仓的宽窄依赖怎么划，哪些算子产生宽依赖
topic: [spark, dependency, shuffle]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-25-kuaishou-ai-data
    company: 快手
    position: Data Agent 研发 / AI 数据系统研发（社招）
    date: 2026-09-25
---

# 一句话

窄依赖一个父分区只被一个子分区依赖，宽依赖一个父分区被多个子分区依赖、需要 shuffle。

# 30 秒回答

窄依赖：map、filter、union、coalesce，可流水线执行。宽依赖（shuffle）：groupByKey、reduceByKey、join、distinct、sortByKey、repartition，触发 shuffle、切分 stage。

# 1 分钟回答

- 窄依赖：一对一/多对一，无 shuffle，同 stage 内 pipeline
- 宽依赖：一对多，需 shuffle，划分 stage
- 宽依赖算子：groupByKey、reduceByKey、join、distinct、sortByKey、repartition
- 意义：决定 stage 边界和容错粒度

# 追问

- 宽依赖为什么要切 stage？
- groupByKey 和 reduceByKey 都宽依赖，谁更优？
