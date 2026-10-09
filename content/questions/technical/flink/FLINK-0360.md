---
id: FLINK-0360
type: technical
question: 如何在FlinkSQL中结合使用State Processor API？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

State Processor 离线读写 savepoint 状态。

# 参考回答

State Processor API 能离线读取和修改 savepoint 里的状态，做状态分析、迁移、修复。SQL 作业状态也可以用这个 API 处理，适合状态治理场景。

# 追问

- 什么场景用 State Processor？
