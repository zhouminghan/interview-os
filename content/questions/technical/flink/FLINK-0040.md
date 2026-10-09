---
id: FLINK-0040
type: technical
question: Flink中的Sink类型有哪些？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Kafka、文件、数据库、自定义 Sink。

# 参考回答

Sink 有 Kafka、文件、JDBC、各种 connector、自定义。输出要注意幂等和 exactly-once 配合。

# 追问

- Sink 怎么保证 exactly-once？
