---
id: FLINK-0481
type: technical
question: 在Kafka集群中，如何优化消息的序列化性能？请详细说明序列化格式、序列化库选择等优化方法，以及如何评估序列化性能。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用高效序列化格式减少开销。

# 参考回答

序列化优化用高效格式，比如 Avro、Protobuf 比 JSON 小且快。选序列化库看性能和 schema 演进需求。评估看消息大小和吞吐。

# 追问

- JSON 和 Avro 怎么选？
