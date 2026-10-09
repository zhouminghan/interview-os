---
id: FLINK-0182
type: technical
question: Flink的分布式快照算法（Chandy-Lamport算法）如何工作？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 barrier 标记做异步一致性快照。

# 参考回答

Flink 的分布式快照借鉴 Chandy-Lamport 算法，用 barrier 标记流，各算子收到 barrier 就快照状态，最终形成一致性快照。不用停止整个流。

# 追问

- barrier 是什么？
