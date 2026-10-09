---
id: WAREHOUSE-0159
type: technical
question: 以下哪个不是数据仓库的常见架构组件？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

数仓常见组件是数据源、ETL、存储、元数据、查询层，业务交易引擎不算。

# 参考回答

数仓架构一般分这几块：数据源、ETL 加工、存储计算、元数据管理、查询或 BI 层。不是组件的选项通常是「业务交易引擎」这类，因为那是 OLTP 业务系统的核心，不在数仓架构里。

# 追问

- 数仓架构各组件怎么协作？
- OLTP 和 OLAP 在架构上怎么隔离？
