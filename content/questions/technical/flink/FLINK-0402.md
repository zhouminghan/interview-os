---
id: FLINK-0402
type: technical
question: 如何将FlinkSQL与Apache Hive集成？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Hive Catalog 和 Hive 连接器读写。

# 参考回答

Flink SQL 和 Hive 集成用 Hive Catalog 复用元数据，能读写 Hive 表。支持流写 Hive 和批读 Hive 数据，实现离线数仓和实时结合。

# 追问

- 流写 Hive 怎么配？
