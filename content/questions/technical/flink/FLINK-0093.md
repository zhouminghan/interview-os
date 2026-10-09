---
id: FLINK-0093
type: technical
question: 如何优化Flink任务的并行度设置？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按吞吐和资源设，别太低也别太高。

# 参考回答

并行度按数据量和资源设，一般每个 TaskManager 的 slot 数乘 TaskManager 数。太低处理不过来，太高调度和状态开销大。可以按吞吐压测调。

# 追问

- 并行度太高有什么代价？
