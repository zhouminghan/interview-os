---
id: FLINK-0147
type: technical
question: 如何解决Flink作业中的序列化问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

类型可序列化、注册 Kryo、避免闭包引用大对象。

# 参考回答

序列化问题解决：用可序列化的类型，注册 Kryo 类，闭包里别塞大对象或连接，用 POJO 或 Tuple。报 NotSerializableException 就查哪没序列化。

# 追问

- NotSerializableException 怎么定位？
