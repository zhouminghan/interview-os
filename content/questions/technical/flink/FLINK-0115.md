---
id: FLINK-0115
type: technical
question: 如何优化Flink的序列化性能？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用高效序列化、减少传输数据、注册类型。

# 参考回答

序列化优化用 Flink 自带的序列化器或 Kryo，减少传输字段，避免大对象。POJO 类型比泛型快，尽量用明确类型。

# 追问

- 为什么 POJO 比泛型快？
