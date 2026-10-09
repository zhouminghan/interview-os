---
id: FLINK-0108
type: technical
question: 如何处理Flink作业的异常和故障？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看日志、重启策略、从 checkpoint 恢复。

# 参考回答

异常处理先看日志定位，靠重启策略自动重启，从 checkpoint 恢复。持续失败要查根因，是数据问题还是资源问题。

# 追问

- 持续失败怎么定位根因？
