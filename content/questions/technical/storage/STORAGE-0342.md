---
id: STORAGE-0342
type: technical
question: 如何优化HBase的WAL性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

异步写 WAL、分组提交。

# 参考回答

WAL 优化用异步写、分组提交减少刷盘次数。WAL 放独立磁盘避免和 HFile 抢 IO。牺牲一点可靠性换性能要谨慎。

# 追问

- WAL 性能影响写入？
