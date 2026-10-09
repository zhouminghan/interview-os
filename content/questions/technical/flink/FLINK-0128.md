---
id: FLINK-0128
type: technical
question: Flink与ElasticSearch的集成方法是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 ES Connector 写索引。

# 参考回答

Flink 写 ES 用 Elasticsearch Connector，把结果写进索引。注意批量写和幂等，避免频繁小写入。

# 追问

- 写 ES 怎么避免小批量？
