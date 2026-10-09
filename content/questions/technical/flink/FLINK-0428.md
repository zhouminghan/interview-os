---
id: FLINK-0428
type: technical
question: 请详细解释Kafka中的消息压缩机制，支持哪些压缩算法，以及如何选择合适的压缩算法？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

支持 gzip、snappy、lz4、zstd。

# 参考回答

Kafka 支持 gzip、snappy、lz4、zstd 压缩。gzip 压缩率高但慢，snappy、lz4 快，zstd 平衡好。按 CPU 和带宽权衡，一般 lz4 或 zstd。

# 追问

- 压缩有什么代价？
