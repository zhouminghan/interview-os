---
id: STORAGE-0438
type: technical
question: Clickhouse与Hadoop生态的区别是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ClickHouse 单机列式分析，Hadoop 分布式批处理。

# 参考回答

ClickHouse 是单机性能极强列式 OLAP，秒级查询；Hadoop 是分布式批处理生态，延迟高。ClickHouse 做交互分析，Hadoop 做大规模离线。

# 追问

- 两者怎么选？
