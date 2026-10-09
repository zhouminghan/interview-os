---
id: SPARK-0223
type: technical
question: 如何优化Spark的日志系统？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

控制日志级别，避免日志刷屏影响性能。

# 参考回答

日志优化是生产用 WARN 或 ERROR 级别，别开 DEBUG，避免大量日志 IO 拖慢任务。关键信息才打日志。

# 追问

- DEBUG 日志为什么影响性能？
