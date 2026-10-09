---
id: FLINK-0369
type: technical
question: 解释FlinkSQL中JOIN后的Watermark传播机制及如何处理多流JOIN的延迟问题。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

JOIN 后 watermark 取最慢输入流。

# 参考回答

JOIN 的 watermark 取所有输入流的最小值，慢流会拖慢整体触发。延迟问题靠优化慢流、调乱序容忍。某条流长期慢会导致结果延迟，要监控。

# 追问

- 慢流导致延迟怎么处理？
