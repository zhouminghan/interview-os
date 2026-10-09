---
id: FLINK-0407
type: technical
question: 解释FlinkSQL与Elasticsearch的集成方式及最佳实践。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ES 做 sink 写索引，批量写。

# 参考回答

Flink SQL 用 ES 连接器把结果写进索引，做实时搜索。最佳实践是批量写、控制刷新频率、配幂等，避免小批量写拖慢 ES。

# 追问

- 写 ES 为什么要批量？
