---
id: STORAGE-0425
type: technical
question: Clickhouse的设计目标是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

面向海量数据的高性能 OLAP。

# 参考回答

ClickHouse 设计目标是海量数据的极速 OLAP 分析，列式存储、向量化执行、单机性能极强。面向分析查询，不是事务处理。

# 追问

- 为什么 ClickHouse 快？
