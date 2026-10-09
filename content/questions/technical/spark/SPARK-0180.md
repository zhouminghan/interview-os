---
id: SPARK-0180
type: technical
question: Structured Streaming的检查点目录如何配置？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

checkpointLocation 指定可靠存储路径。

# 参考回答

检查点目录用 writeStream 的 checkpointLocation 指定，必须可靠存储。查询恢复和 exactly-once 都靠它。

# 追问

- 两个查询能共用 checkpoint 目录吗？
