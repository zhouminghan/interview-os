---
id: SPARK-0103
type: technical
question: DataFrame的列操作有哪些？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

select、withColumn、drop、rename 等操作列。

# 参考回答

列操作主要是 select 选列、withColumn 新建或替换列、drop 删列、withColumnRenamed 改名。列表达式用 col 或 $ 引用。

# 追问

- withColumn 和 select 的差别？
