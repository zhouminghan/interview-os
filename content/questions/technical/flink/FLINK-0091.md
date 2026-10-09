---
id: FLINK-0091
type: technical
question: 如何处理数据倾斜（Data Skew）问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

keyBy 前加盐、两阶段聚合、局部预聚合。

# 参考回答

数据倾斜处理用热点 key 加盐打散，两阶段聚合，或者用 local keyBy 先局部聚合。核心是把热点 key 分散到多个并行实例。

# 追问

- 加盐后怎么还原？
