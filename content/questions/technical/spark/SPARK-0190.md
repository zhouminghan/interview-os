---
id: SPARK-0190
type: technical
question: Structured Streaming的批处理优化策略有哪些？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

控制单批大小、并行度、避免小文件。

# 参考回答

批处理优化主要控制每批处理的数据量、合理并行度、输出合并避免小文件、减少 shuffle。看 processing time 是否稳定。

# 追问

- 小文件怎么避免？
