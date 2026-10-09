---
id: WAREHOUSE-0116
type: technical
question: 在数据仓库建设中，常用的ETL工具都有哪些？它们的特点是什么？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

离线常见 DataX、Sqoop、Kettle，实时常见 Flink CDC、Canal。

# 参考回答

批量离线的一般用 DataX、Sqoop 做跨库抽取，Kettle 做图形化加工，也有直接拿 Spark 写 ETL 的；实时的常用 Canal、Debezium 监听 binlog，配合 Flink 做流式处理。选型主要看数据量、实时性要求和团队技术栈。

# 追问

- Sqoop 和 DataX 有什么差别？
- 实时同步为什么常用 Flink CDC？
