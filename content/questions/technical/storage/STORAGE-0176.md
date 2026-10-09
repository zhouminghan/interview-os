---
id: STORAGE-0176
type: technical
question: 什么是Hive的日志管理？请详细说明日志的类型、收集方法、分析工具和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

集中收集 Hive 日志，分析定位问题。

# 参考回答

Hive 日志分服务日志和任务日志，集中到日志系统，按时间和关键词检索。排查失败任务看执行日志。日志保留和清理要规划。

# 追问

- 任务失败看什么日志？
