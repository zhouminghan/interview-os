---
id: FLINK-0319
type: technical
question: 如何使用FlinkSQL的EXPLAIN命令分析查询计划？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 EXPLAIN 看逻辑和物理执行计划。

# 参考回答

EXPLAIN 能看查询的逻辑计划和物理计划，包括 join 方式、分区、优化后的算子。分析性能先看执行计划，定位全表扫和 shuffle。

# 追问

- 执行计划里看哪些关键点？
