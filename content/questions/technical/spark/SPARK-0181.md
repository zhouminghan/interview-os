---
id: SPARK-0181
type: technical
question: 如何实现Structured Streaming的自定义数据？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

自定义 source 实现流式读取。

# 参考回答

自定义数据源要实现 Source 或 SourceProvider，定义怎么读流数据、offset 和 schema。门槛比自定义 Receiver 高。

# 追问

- Source 和 Sink 都要自定义吗？
