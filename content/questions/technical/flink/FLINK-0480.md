---
id: FLINK-0480
type: technical
question: 请详细说明Kafka的缓存优化策略，包括页缓存、文件系统缓存等机制，以及如何配置这些参数。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠操作系统页缓存加速读写。

# 参考回答

Kafka 主要靠操作系统页缓存加速消息读写，数据先写页缓存再落盘。配置上给足内存给页缓存，别让堆内存占太多。

# 追问

- 页缓存和堆内存怎么分？
