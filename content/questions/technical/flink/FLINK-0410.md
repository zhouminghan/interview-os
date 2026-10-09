---
id: FLINK-0410
type: technical
question: 如何将FlinkSQL与ClickHouse集成实现OLAP查询？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink 算结果写 ClickHouse，查询走 CK。

# 参考回答

Flink SQL 实时聚合后写 ClickHouse，ClickHouse 做 OLAP 查询。Flink 管实时计算，CK 管快速多维查询。用 JDBC 或官方 connector 写。

# 追问

- ClickHouse 写优化？
