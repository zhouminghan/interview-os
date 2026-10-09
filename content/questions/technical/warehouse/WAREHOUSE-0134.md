---
id: WAREHOUSE-0134
type: technical
question: 如何评估和选择适合项目需求的数据仓库解决方案？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

从数据量、实时性、查询模式、成本和团队栈几个维度综合选。

# 参考回答

我会先看数据量级、要不要实时、查询是点查还是聚合分析、预算多少、团队熟不熟这套技术。离线为主就 Hive 加 Spark 加调度；要实时就加 Flink；查询层要快就 Doris、ClickHouse。没有银弹，都是权衡出来的。

# 追问

- 自建数仓和买云上数仓怎么权衡？
- 数据量多少算适合上列存 OLAP 引擎？
