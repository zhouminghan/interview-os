---
id: SPARK-0182
type: technical
question: Structured Streaming的监控指标有哪些？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

input rate、处理速率、延迟、积压。

# 参考回答

监控指标有 input rate、process rate、batch 延迟、积压 offset 数、状态大小。重点看处理速率是否跟得上输入。

# 追问

- 处理速率跟不上怎么发现？
