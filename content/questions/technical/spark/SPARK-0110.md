---
id: SPARK-0110
type: technical
question: 如何将DataFrame转换为RDD？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

df.rdd 直接转成 RDD[Row]。

# 参考回答

用 df.rdd 把 DataFrame 转成 RDD，元素是 Row 对象。一般不需要转，除非要调用 RDD 特有 API。

# 追问

- 什么时候需要转回 RDD？
