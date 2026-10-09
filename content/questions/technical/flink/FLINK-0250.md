---
id: FLINK-0250
type: technical
question: 解释FlinkSQL中的TableFunction概念及如何实现。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

表函数，一行输入多行输出。

# 参考回答

TableFunction 是表值函数，一行输入产生多行输出。用 collect 收集结果。LATERAL TABLE 关联使用，做行展开。

# 追问

- LATERAL TABLE 是什么？
