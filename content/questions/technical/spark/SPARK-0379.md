---
id: SPARK-0379
type: technical
question: 什么是 Spark 中的 Shuffle 操作？
difficulty: 0
topic: []
source_type: knowledge
---

Shuffle 是将数据跨分区重新分布的过程，需要跨 Executor 和机器复制数据。这是 Spark 中最昂贵的操作之一。
