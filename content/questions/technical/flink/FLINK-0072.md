---
id: FLINK-0072
type: technical
question: 检查点清理策略是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

保留最近几个 checkpoint，旧的自动清理。

# 参考回答

检查点清理策略是配置保留多少个 checkpoint，超出的自动删除，避免占满存储。一般保留最近几个，同时留一个 savepoint 用于手动回滚。别全清，否则没得恢复。

# 追问

- 保留几个 checkpoint 合适？
