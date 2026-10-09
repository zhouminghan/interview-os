---
id: FLINK-0174
type: technical
question: Flink的网络传输机制是如何实现的？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Netty 做节点间网络传输，配合缓冲和反压。

# 参考回答

Flink 网络传输基于 Netty，数据在算子间通过网络缓冲和队列传输，配合 credit 机制做反压。网络层是流式的，边发送边处理。

# 追问

- 网络层为什么用 Netty？
