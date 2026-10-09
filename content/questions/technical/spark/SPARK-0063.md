---
id: SPARK-0063
type: technical
question: Spark的序列化机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Java 或 Kryo 序列化对象，Kryo 更快更省。

# 参考回答

Spark 传输数据要序列化，默认 Java 序列化慢且大，推荐 Kryo，快几倍、占用小。shuffle、缓存、广播都会用到序列化，所以选对很重要。

# 追问

- Kryo 为什么比 Java 序列化快？
