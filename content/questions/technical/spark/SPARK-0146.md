---
id: SPARK-0146
type: technical
question: 什么是Spark Streaming？它的主要特点是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

基于微批的流处理，把流切成小批次处理。

# 参考回答

Spark Streaming 是老的流处理框架，把实时数据切成一个个小批次，用批处理引擎算。特点是简单、复用批处理生态，但延迟是秒级，不是真正的低延迟。

# 追问

- 微批和真流式的区别？
