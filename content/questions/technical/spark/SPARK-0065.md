---
id: SPARK-0065
type: technical
question: Spark的内存管理策略有哪些？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

统一内存管理，执行和存储动态借用。

# 参考回答

内存管理分静态和统一两种，现在默认统一管理，执行内存和存储内存可以互相借用。还有堆外内存。关键参数是 spark.memory.fraction 这些，控制执行存储比例。

# 追问

- 静态和统一管理的区别？
