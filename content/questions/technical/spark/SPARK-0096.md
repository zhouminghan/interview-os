---
id: SPARK-0096
type: technical
question: 什么是DataFrame？它与RDD的区别是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

DataFrame 有 schema、列式、带优化器，RDD 是原始对象集合。

# 参考回答

DataFrame 是带 schema 的结构化数据，像一张表，有 Catalyst 优化器，性能好；RDD 是原始对象集合，没有结构，操作灵活但性能差、易出错。现在都优先用 DataFrame。

# 追问

- 为什么 DataFrame 比 RDD 快？
