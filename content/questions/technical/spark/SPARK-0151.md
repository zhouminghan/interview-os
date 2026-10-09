---
id: SPARK-0151
type: technical
question: Spark Streaming的检查点机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

checkpoint 保存元数据、状态和 offset 用于恢复。

# 参考回答

检查点把配置、DStream 状态、offset 存到可靠存储。应用挂了重启能从 checkpoint 恢复。配置 checkpoint 目录，流式有状态操作必须配。

# 追问

- 什么操作必须配 checkpoint？
