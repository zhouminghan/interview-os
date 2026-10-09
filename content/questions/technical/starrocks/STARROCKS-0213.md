---
id: STARROCKS-0213
type: technical
question: StarRocks 与 ClickHouse、Doris 等产品的对比如何？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

StarRocks join 和实时更新强，ClickHouse 单表快，Doris 同源。

# 参考回答

对比看：ClickHouse 单表聚合极快但 join 弱；Doris 和 StarRocks 同源，能力接近；StarRocks 在多表 join、实时更新、存算分离上更突出。选型看业务负载。

# 追问

- 多表 join 多的场景选谁？
