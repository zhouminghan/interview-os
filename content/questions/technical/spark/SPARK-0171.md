---
id: SPARK-0171
type: technical
question: 如何优化Structured Streaming的性能？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

合理分区、状态清理、调整 trigger 和并行度。

# 参考回答

性能优化靠合理分区、控制状态大小和清理、选合适的 trigger、调并行度、减少小文件。状态膨胀和输出小文件是常见问题。

# 追问

- 状态膨胀怎么处理？
