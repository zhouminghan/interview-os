---
id: FLINK-0119
type: technical
question: 如何提高Flink的吞吐量？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

加并行度、减少序列化、优化网络。

# 参考回答

提高吞吐靠加并行度、减少序列化开销、优化网络缓冲、减少状态访问。吞吐和延迟要平衡，看业务优先哪个。

# 追问

- 吞吐和延迟怎么平衡？
