---
id: SPARK-0037
type: technical
question: RDD、DataFrame、Dataset 的区别
topic: [spark, api]
difficulty: 2
frequency: medium
source_type: knowledge
---

# 一句话

RDD 是低层、无 schema；DataFrame 是带 schema 的列式抽象；Dataset 是强类型。

# 30 秒回答

RDD 灵活但性能差；DataFrame 有 schema 和 Catalyst 优化；Dataset 强类型（Scala/Java）。Spark SQL 默认用 DataFrame。

# 追问

- 三者怎么选？
- DataFrame 比 RDD 快在哪？
