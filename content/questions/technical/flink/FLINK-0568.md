---
id: FLINK-0568
type: technical
question: Spark 和 Flink 序列化的区别？
difficulty: 0
topic: []
source_type: knowledge
---

- **Spark**：默认是 Java 序列化机制，同时有一个优化机制，即 Kryo
- **Flink**：是自行实现的序列化机制，即 `TypeInformation`

---
