---
id: FLINK-0475
type: technical
question: 在Kafka集群中，如何优化消息的存储性能？请详细说明存储格式、索引设计等优化方法，以及如何评估存储性能。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

顺序写、压缩、合理索引优化存储。

# 参考回答

存储优化靠顺序写日志、消息压缩省空间、稀疏索引加速定位。评估看磁盘使用率和读写吞吐。SSD 和多磁盘也有帮助。

# 追问

- 存储性能怎么评估？
