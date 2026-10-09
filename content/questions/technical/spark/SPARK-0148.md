---
id: SPARK-0148
type: technical
question: 什么是DStream？它的特点是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

DStream 是连续 RDD 的序列，代表流数据。

# 参考回答

DStream 是离散流，本质是一串 RDD，每个 RDD 是一个小批次的数据。对 DStream 的转换其实是对里面每个 RDD 转换。

# 追问

- DStream 和 RDD 什么关系？
