---
id: SPARK-0041
type: technical
question: Spark 的 Stage 是怎么划分的
topic: [spark, stage]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-05-14-kuaishou-liuyong-er-mian
    company: 快手
    position: 数据研发（留用实习）
    date: 2026-05-14
---

# 一句话

以宽依赖（Shuffle Dependency）为界：DAGScheduler 从最终 RDD 往前回溯，每遇到一个宽依赖切一刀。

# 30 秒回答

Driver 把 SQL/RDD 解析成逻辑计划，DAGScheduler 从最终 RDD 往前回溯，遇到宽依赖（shuffle）就分成前后两个 Stage。最后一个 Stage 是 ResultStage，前面是 ShuffleMapStage。

# 1 分钟回答

- 切分依据：宽依赖是全局 barrier，必须等所有上游 map task 跑完才能拉取，无法 pipeline
- 窄依赖（map/filter）一对一，可 pipeline 在同一 Stage 连续执行
- 最后一个 Stage 是 ResultStage，前面都是 ShuffleMapStage
- 例：`t1 JOIN t2 GROUP BY` 至少 3 个 Stage（t1 map、t2 map、join+group result），小表广播则只 2 个
- 实操：Spark UI 里几个 GROUP BY/JOIN 大概对应几个 Stage

# 追问

- 为什么窄依赖可以在一个 Stage 内 pipeline？
- 小表广播为什么能减少 Stage 数？
