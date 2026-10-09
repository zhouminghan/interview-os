---
id: FLINK-0381
type: technical
question: 如何使用FlinkSQL实现多维实时OLAP查询系统？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink 实时算多维聚合，写 OLAP 引擎查询。

# 参考回答

多维实时 OLAP 用 Flink SQL 做多维度实时聚合，写到 Doris、StarRocks 这类 OLAP 引擎，下游做多维下钻查询。Flink 算，OLAP 查。

# 追问

- 为什么不在 Flink 里直接查？
