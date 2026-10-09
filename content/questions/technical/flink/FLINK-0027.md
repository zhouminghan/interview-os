---
id: FLINK-0027
type: technical
question: Flink中JobManager和TaskManager的职责是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

JobManager 管调度和协调，TaskManager 管计算。

# 参考回答

JobManager 负责作业调度、生成执行图、协调 checkpoint 和故障恢复；TaskManager 是工作节点，执行具体的 task、管理 slot 和状态。

# 追问

- JobManager 挂了怎么办？
