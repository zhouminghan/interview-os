---
id: SPARK-0102
type: technical
question: 如何定义DataFrame的schema？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 StructType 加 StructField 手动定义。

# 参考回答

定义 schema 用 StructType 包多个 StructField，每个字段写名字、类型、可空性。手动定义比自动推断更可靠，尤其数据里 null 多或类型复杂时。

# 追问

- StructField 里都有什么？
