---
id: SPARK-0167
type: technical
question: Structured Streaming与Spark Streaming的区别是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Structured 基于 DataFrame 流批统一，老版基于 RDD 微批。

# 参考回答

主要区别：Structured Streaming 用 DataFrame、Dataset 统一 API，有事件时间和 exactly-once；Spark Streaming 基于 RDD 微批，只有 at-least-once，要手动管状态。新项目都用 Structured。

# 追问

- exactly-once 和 at-least-once 的区别？
