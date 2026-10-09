---
id: FLINK-0399
type: technical
question: 解释基于FlinkSQL的OLAP查询加速架构设计。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink 实时算结果，写 OLAP 引擎加速查询。

# 参考回答

OLAP 加速用 Flink SQL 实时聚合，把结果写进 Doris、ClickHouse 这类 OLAP 引擎，查询走 OLAP。Flink 负责算，OLAP 负责快查。

# 追问

- 为什么不直接查 Flink 状态？
