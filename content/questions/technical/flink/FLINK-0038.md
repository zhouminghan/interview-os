---
id: FLINK-0038
type: technical
question: Flink中常见的Source类型有哪些？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Kafka、文件、Socket、自定义 Source。

# 参考回答

Source 有 Kafka、文件、Socket、数据库 CDC、自定义。生产上 Kafka 和 CDC 最常用，通过 addSource 或 fromSource 接入。

# 追问

- Kafka Source 怎么配？
