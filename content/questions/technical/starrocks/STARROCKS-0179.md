---
id: STARROCKS-0179
type: technical
question: StarRocks 与其他数据源的实时同步方案有哪些？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CDC 加 Flink 或 Routine Load 做实时同步。

# 参考回答

实时同步一般用 Canal、Debezium 这类 CDC 抓变更，再通过 Flink 或 Routine Load 写进 StarRocks，配合主键模型做 upsert。

# 追问

- 为什么同步要配合主键模型？
