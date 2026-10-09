---
id: STARROCKS-0145
type: technical
question: StarRocks 如何处理复杂的 ETL 任务？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

复杂 ETL 别全压给 StarRocks，用 Spark 或 Flink 加工再导入。

# 参考回答

StarRocks 擅长查询，不擅长复杂 ETL。复杂清洗、多源 join 这类用 Spark 或 Flink 做完，再把结果导入 StarRocks 供查询。它适合做 ETL 的最后一跳或轻量转换。

# 追问

- 什么算轻量转换？
