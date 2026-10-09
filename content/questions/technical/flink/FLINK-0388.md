---
id: FLINK-0388
type: technical
question: 解释一个实际案例：如何优化FlinkSQL与Kafka交互性能？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

对齐分区数、调批量、合理 offset 提交。

# 参考回答

Kafka 交互优化：source 并行度跟 Kafka 分区对齐，调 fetch 和 batch 参数，合理配置 offset 提交。sink 用事务或幂等保证 exactly-once。

# 追问

- 分区数不对齐会怎样？
