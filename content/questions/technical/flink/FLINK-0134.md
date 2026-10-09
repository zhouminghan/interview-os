---
id: FLINK-0134
type: technical
question: 如何使用Flink实现实时ETL？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Source 读、转换清洗、Sink 写，流式加工。

# 参考回答

实时 ETL 用 Flink 从 Kafka 或 CDC 读，做清洗、过滤、转换、join，再写到目标库或数仓。实时数仓的 ETL 就是这套。

# 追问

- 实时 ETL 和离线 ETL 的区别？
