---
id: SPARK-0187
type: technical
question: 如何实现Structured Streaming的自定义序列化？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Kryo 或 Encoder 自定义序列化。

# 参考回答

自定义序列化用 Kryo 注册自定义类，或定义 Encoder。Dataset 的 Encoder 比 Java 序列化高效，默认就能用。

# 追问

- Encoder 是什么？
