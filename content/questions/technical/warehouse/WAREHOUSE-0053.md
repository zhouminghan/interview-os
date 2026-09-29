---
id: WAREHOUSE-0053
type: technical
question: 数据仓库、数据库、数据湖的区别是什么
topic: [warehouse, database, data-lake]
difficulty: 2
frequency: high
source_type: knowledge
---

# 一句话

数据库面向事务（OLTP），数仓面向分析（OLAP），数据湖低成本存全量原始多格式数据。

# 30 秒回答

数据库：事务、实时、行存、数据量小；数仓：主题化、分层、列存、历史聚合；数据湖：原始数据、多格式、低成本、Schema-on-read。

# 1 分钟回答

- 数据库（OLTP）：高并发点查、事务 ACID、行式存储
- 数仓（OLAP）：面向分析、按主题分层、列式存储、聚合历史
- 数据湖：全量原始数据、多格式、对象存储、按需读时建模
- 联系：数据库经 ETL 入数仓；数据湖可作数仓底层存储（湖仓一体）

# 追问

- 什么时候用数据湖而不是数仓？
- 湖仓一体解决什么？
