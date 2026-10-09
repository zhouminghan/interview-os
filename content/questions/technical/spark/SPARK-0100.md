---
id: SPARK-0100
type: technical
question: DataFrame的常用操作有哪些？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

select、filter、groupBy、agg、join、withColumn 等。

# 参考回答

常用操作有 select 选列、filter 过滤、groupBy 加 agg 聚合、join 关联、withColumn 加列、orderBy 排序、drop 删列。都是声明式，交给优化器。

# 追问

- 声明式操作有什么好处？
