---
id: FLINK-0409
type: technical
question: 解释FlinkSQL与Apache Paimon的集成方式及应用场景。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Paimon 是 Flink 社区的数据湖格式，流写流读。

# 参考回答

Paimon 是 Flink 社区孵化的数据湖格式，和 Flink 深度集成，支持流式写入和实时更新，做湖仓一体。适合 Flink 为主的实时数仓。

# 追问

- Paimon 和 Iceberg 区别？
