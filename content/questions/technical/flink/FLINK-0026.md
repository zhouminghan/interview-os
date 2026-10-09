---
id: FLINK-0026
type: technical
question: 解释Flink的架构组件及其作用。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

JobManager、TaskManager、ResourceManager、Dispatcher。

# 参考回答

Flink 架构有 JobManager 管作业调度和 checkpoint，TaskManager 跑实际任务，ResourceManager 管资源，Dispatcher 接提交。这是主从架构。

# 追问

- 各组件怎么协作？
