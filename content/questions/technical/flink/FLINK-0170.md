---
id: FLINK-0170
type: technical
question: 如何设计可扩展的Flink数据处理管道？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分层解耦、状态可扩展、并行度弹性。

# 参考回答

可扩展管道设计是算子解耦、状态用 RocksDB 可扩展、并行度能弹性调整、数据源可水平扩展。Kafka 分区数对齐并行度。

# 追问

- Kafka 分区和并行度怎么对齐？
