---
id: STORAGE-0516
type: technical
question: 写出使用TTL自动删除过期数据的建表语句。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

建表加 TTL 子句。

# 参考回答

建表时 TTL 时间列 + INTERVAL 保留期，到期自动删。比如 TTL event_time + INTERVAL 30 DAY。后台任务执行。

# 追问

- TTL 怎么生效？
