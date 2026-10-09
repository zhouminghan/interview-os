---
id: SPARK-0113
type: technical
question: 如何优化DataFrame的性能？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用列式格式、谓词下推、列剪裁、broadcast join。

# 参考回答

DataFrame 性能优化靠：存 Parquet 列式格式、谓词下推减少读、列剪裁只读需要的列、小表 broadcast join、合理分区。Catalyst 优化器会自动做很多。

# 追问

- 列式格式为什么快？
