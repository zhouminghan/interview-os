---
id: SPARK-0142
type: technical
question: 如何分析Spark SQL的查询计划？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 explain 看逻辑和物理计划。

# 参考回答

用 df.explain 看执行计划，explain 加 true 能看解析、逻辑、物理三层。重点看有没有全表扫、join 方式、shuffle 和分区裁剪。

# 追问

- explain(true) 输出怎么读？
