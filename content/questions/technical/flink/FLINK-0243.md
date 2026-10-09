---
id: FLINK-0243
type: technical
question: 如何在FlinkSQL中使用Elasticsearch连接器？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配 hosts 和 index，写文档或查索引。

# 参考回答

ES 连接器配 hosts、index，Sink 写文档，Source 读索引。批量写、控制刷新，避免频繁小写入。

# 追问

- ES sink 怎么批量写？
