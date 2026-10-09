---
id: SPARK-0211
type: technical
question: 如何优化Spark的checkpoint策略？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

长血缘才 checkpoint，别频繁。

# 参考回答

checkpoint 只在血缘很长或关键节点用，因为它要写盘有开销。cache 能解决复用就别 checkpoint。

# 追问

- checkpoint 和 cache 怎么搭配？
