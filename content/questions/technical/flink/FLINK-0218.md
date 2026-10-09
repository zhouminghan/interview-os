---
id: FLINK-0218
type: technical
question: 解释FlinkSQL中的流处理和批处理模式及其统一API的概念。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

一套 SQL 既处理流也处理批。

# 参考回答

流批统一就是一套 Table API 和 SQL 同时处理无界流和有界批，批是有界流的特例。不用维护两套代码。

# 追问

- 流批统一有什么价值？
