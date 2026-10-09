---
id: SPARK-0126
type: technical
question: 什么是Spark SQL的谓词下推？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

过滤条件提前到数据源执行，减少读数据。

# 参考回答

谓词下推是把 where 过滤条件推到数据源层，比如读 Parquet 时就只读满足条件的行，减少 IO 和后续处理量。列式格式尤其受益。

# 追问

- 谓词下推能推到哪些数据源？
