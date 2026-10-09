---
id: SPARK-0169
type: technical
question: 如何实现Structured Streaming的端到端一致性？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

checkpoint、幂等 sink、事务输出实现 exactly-once。

# 参考回答

端到端 exactly-once 需要三块：checkpoint 存 offset、幂等或事务性的 sink、可重放的 source。像写 Kafka 用事务，写文件用幂等重命名。

# 追问

- 为什么 sink 要幂等？
