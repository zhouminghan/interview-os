---
id: STORAGE-0755
type: technical
question: Hive 中有哪些 SerDe 实现？
difficulty: 0
topic: []
source_type: knowledge
---

- **LazySimpleSerDe**：默认 SerDe
- **RegexSerDe**：正则表达式解析
- **JsonSerDe**：JSON 格式
- **ORCSerDe** / **ParquetHiveSerDe**：列式存储
- **AvroSerDe**：Avro 格式
- **自定义 SerDe**：实现自己的数据格式
