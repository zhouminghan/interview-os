---
id: FLINK-0070
type: technical
question: Flink任务从检查点恢复的步骤是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

指定 checkpoint 路径，启动时自动恢复。

# 参考回答

恢复步骤：启动时指定 checkpoint 或 savepoint 路径，Flink 加载状态快照和 offset，重建任务图，从保存的位置继续消费。可以指定从哪个 savepoint 恢复。

# 追问

- 怎么指定从 savepoint 启动？
