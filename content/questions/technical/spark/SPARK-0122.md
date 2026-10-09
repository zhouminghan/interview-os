---
id: SPARK-0122
type: technical
question: 如何注册临时视图？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

createOrReplaceTempView 注册临时表。

# 参考回答

用 createOrReplaceTempView 把 DataFrame 注册成临时视图，就能用 SQL 查。还有 createGlobalTempView 是全局的。临时视图只在当前 session 有效。

# 追问

- 临时视图和全局视图的区别？
