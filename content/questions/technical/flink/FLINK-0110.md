---
id: FLINK-0110
type: technical
question: 如何进行Flink作业的版本管理和升级？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 savepoint 做有状态升级。

# 参考回答

升级作业先打 savepoint，停旧作业，用新代码从 savepoint 启动，保留状态。注意 API 和状态兼容性，不兼容要迁移状态。

# 追问

- 状态不兼容怎么办？
