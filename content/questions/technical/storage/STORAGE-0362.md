---
id: STORAGE-0362
type: technical
question: HBase的日志优化策略有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

控制日志级别，集中收集。

# 参考回答

日志优化控制日志级别，生产用 WARN，别开 DEBUG 刷日志。集中收集到日志系统。关键操作记日志，用于排查。

# 追问

- 日志太多有什么影响？
