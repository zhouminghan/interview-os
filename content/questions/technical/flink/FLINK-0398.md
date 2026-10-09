---
id: FLINK-0398
type: technical
question: 如何在FlinkSQL架构中实现元数据管理？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Catalog 管理元数据，对接 Hive Metastore。

# 参考回答

元数据管理用 Catalog，存库表函数定义，对接 Hive Metastore 复用元数据。表结构、schema 统一在 Catalog 管理，SQL 里引用。

# 追问

- Hive Catalog 怎么配？
