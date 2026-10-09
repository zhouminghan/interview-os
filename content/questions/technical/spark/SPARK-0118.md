---
id: SPARK-0118
type: technical
question: 如何创建SparkSession？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SparkSession.builder 配置后 getOrCreate。

# 参考回答

创建 SparkSession 用 builder 链式配置 appName、master 这些，最后 getOrCreate，已经存在就复用。是 SQL 和 DataFrame 的入口。

# 追问

- getOrCreate 和 create 的区别？
