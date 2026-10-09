---
id: SPARK-0219
type: technical
question: 如何优化Spark的调度策略？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 FAIR 调度、数据本地性、动态资源。

# 参考回答

调度优化用 FAIR 公平调度多作业共享，提高数据本地性减少网络，开动态资源分配省资源。

# 追问

- FAIR 和 FIFO 调度的区别？
