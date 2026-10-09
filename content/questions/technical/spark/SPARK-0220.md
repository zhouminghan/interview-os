---
id: SPARK-0220
type: technical
question: 如何优化Spark的资源分配？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

executor 数、核数、内存合理配。

# 参考回答

资源分配按数据量和任务类型配 executor 数、核数、内存，别过大过小。动态资源分配能自动调整。

# 追问

- executor 核数怎么定？
