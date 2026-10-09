---
id: SPARK-0173
type: technical
question: 如何实现Structured Streaming的自定义输出？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 foreach 或自定义 sink 写输出。

# 参考回答

自定义输出用 foreach 或 foreachBatch，自己写逻辑。foreachBatch 适合控制小文件或写多个地方。注意幂等性。

# 追问

- foreach 和 foreachBatch 怎么选？
