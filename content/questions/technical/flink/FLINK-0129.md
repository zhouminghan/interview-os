---
id: FLINK-0129
type: technical
question: 如何使用Flink处理JSON、Avro等格式的数据？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用对应序列化器和格式处理。

# 参考回答

Flink 处理 JSON、Avro 用对应的 format 和序列化器，定义 schema 解析。生产上 Avro 更常用，因为带 schema 和压缩。

# 追问

- Avro 和 JSON 怎么选？
