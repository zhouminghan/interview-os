---
id: SPARK-0079
type: technical
question: RDD的转换操作和行动操作有什么区别？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

转换是惰性不执行，行动触发真正计算。

# 参考回答

转换操作返回新 RDD，是惰性的，不真正算，比如 map、filter；行动操作触发整个计算，返回结果或写出去，比如 count、collect。只有遇到行动才真正执行。

# 追问

- 为什么转换要设计成惰性？
