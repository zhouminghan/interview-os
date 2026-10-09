---
id: FLINK-0350
type: technical
question: 什么情况下会触发FlinkSQL作业的自动重启？如何控制？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

作业失败按重启策略自动重启。

# 参考回答

任务异常或失败会按重启策略自动重启，策略有固定延迟、失败率等。配合 checkpoint 从上次位置恢复。超过重启上限就彻底失败。

# 追问

- 重启策略怎么配？
