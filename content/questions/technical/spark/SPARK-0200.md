---
id: SPARK-0200
type: technical
question: 如何优化Spark的序列化？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Kryo 代替 Java 序列化。

# 参考回答

序列化用 Kryo 比 Java 快几倍、占用小，注册自定义类效果更好。shuffle、缓存、广播都受益。

# 追问

- Kryo 怎么注册自定义类？
