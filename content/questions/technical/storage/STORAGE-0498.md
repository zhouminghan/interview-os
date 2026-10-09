---
id: STORAGE-0498
type: technical
question: 如何计算Clickhouse表的大小？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

查系统表 system.parts。

# 参考回答

查表大小用 system.parts 系统表，sum 各数据块大小。system.tables 有总行数和大小。用于容量管理和监控。

# 追问

- 表大小怎么查？
