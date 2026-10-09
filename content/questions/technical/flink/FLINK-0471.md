---
id: FLINK-0471
type: technical
question: 在Kafka集群中，如何优化消息的读取性能？请详细说明批量消费、多线程消费等优化方法，以及各自的优缺点。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

批量消费、多线程并行提升读取。

# 参考回答

读取优化用批量消费减少请求，多线程或加大并行度并行消费。批量提高吞吐但加延迟，多线程要注意 offset 提交和顺序。

# 追问

- 多线程消费有什么坑？
