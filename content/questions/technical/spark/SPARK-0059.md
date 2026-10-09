---
id: SPARK-0059
type: technical
question: 解释Spark中的Stage划分过程。
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

遇到宽依赖就切一个新 Stage。

# 参考回答

Stage 划分看依赖：窄依赖在一个 Stage 内流水线执行，遇到宽依赖也就是 shuffle 就切新 Stage。所以一个 job 里 shuffle 越多 Stage 越多。

# 追问

- 一个 job 有多少 Stage 怎么判断？
