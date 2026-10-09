---
id: SPARK-0098
type: technical
question: DataFrame和Dataset的关系是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

DataFrame 是 Dataset[Row] 的特例。

# 参考回答

DataFrame 本质是 Dataset[Row]，即没有编译期类型的 Dataset。Dataset 是带泛型的强类型版本。所以两者共享同一套优化器和 API。

# 追问

- Dataset[Row] 里的 Row 是什么？
