---
id: SPARK-0101
type: technical
question: 什么是DataFrame的schema？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

schema 是 DataFrame 的列名和类型定义。

# 参考回答

schema 就是表结构，定义每列名字、类型、是否可空。有了 schema，Spark 能提前校验、做列裁剪和优化。可以用自动推断或手动指定。

# 追问

- 自动推断 schema 有什么坑？
