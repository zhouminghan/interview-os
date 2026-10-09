---
id: SPARK-0097
type: technical
question: 什么是Dataset？它的特点是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Dataset 结合 RDD 类型安全和 DataFrame 优化。

# 参考回答

Dataset 是强类型的结构化数据，既有 RDD 的编译期类型安全，又有 DataFrame 的 Catalyst 优化。主要在 Scala、Java 里用，Python 没有 Dataset 只有 DataFrame。

# 追问

- Python 为什么没有 Dataset？
