---
id: FLINK-0168
type: technical
question: 如何设计支持实时和批处理混合的Flink架构？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用流处理统一，批是有界流。

# 参考回答

流批混合用 Flink 的统一 API，实时用无界流，批处理用有界流，同一套代码。需要离线结果就跑有界流。

# 追问

- 流批统一有什么好处？
