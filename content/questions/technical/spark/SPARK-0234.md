---
id: SPARK-0234
type: technical
question: 什么是Spark History Server？它的主要功能是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

查看已完成应用的 UI 和历史日志。

# 参考回答

History Server 是把 Spark 应用的事件日志集中起来，应用结束后也能看它的 UI、stage、executor 状态。排查历史任务很有用。

# 追问

- History Server 依赖什么数据？
