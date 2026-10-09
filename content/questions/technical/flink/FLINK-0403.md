---
id: FLINK-0403
type: technical
question: 解释FlinkSQL与Apache Iceberg的集成方式及优势。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink 流写 Iceberg，做湖仓一体。

# 参考回答

Flink SQL 流式写 Iceberg，利用 Iceberg 的 ACID 事务和 schema 演进，做湖仓一体。Flink 实时写，Spark 等批量读，流批统一。

# 追问

- Iceberg 的优势是什么？
