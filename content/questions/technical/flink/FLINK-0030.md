---
id: FLINK-0030
type: technical
question: Flink中的CheckpointCoordinator有什么作用？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

协调 checkpoint 的生成和完成。

# 参考回答

CheckpointCoordinator 是 JobManager 里的组件，定期触发 checkpoint，协调各算子对齐、快照，确认完成后提交。保证一致性快照。

# 追问

- checkpoint 触发谁发起的？
