---
id: FLINK-0029
type: technical
question: Flink如何处理状态？什么是状态后端（State Backend）？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

状态是流处理中间结果，后端决定状态存哪里。

# 参考回答

Flink 状态是有状态计算保存的中间结果，比如聚合值。状态后端决定状态存哪：内存、文件或 RocksDB。RocksDB 适合大状态。

# 追问

- 状态后端怎么选？
