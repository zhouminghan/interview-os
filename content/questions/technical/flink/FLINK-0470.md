---
id: FLINK-0470
type: technical
question: 请详细解释Kafka的磁盘I/O优化策略，包括顺序写入、零拷贝、页缓存等机制，以及如何配置这些参数？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

顺序写、零拷贝、页缓存提升 IO。

# 参考回答

Kafka 用顺序追加写日志、sendfile 零拷贝、页缓存加速读写。磁盘 IO 优化主要靠这些机制，配置上多磁盘和 SSD。

# 追问

- 零拷贝是什么？
