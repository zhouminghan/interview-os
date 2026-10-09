---
id: SPARK-0111
type: technical
question: 如何将RDD转换为DataFrame？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

rdd.toDF 加 schema 转成 DataFrame。

# 参考回答

RDD 转 DataFrame 用 toDF，可以自动推断或传 StructType 指定 schema。有 schema 才能利用 DataFrame 优化。

# 追问

- 转 DataFrame 时 schema 重要吗？
