---
id: STORAGE-0158
type: technical
question: 什么是Hive的ORC格式？请详细说明ORC格式的特点、优势和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ORC 是 Hive 原生的列式格式。

# 参考回答

ORC 是列式存储，压缩好、带索引和统计信息，查询只读需要的列。Hive 生态最常用，适合离线数仓。比 TextFile 小很多，查询快。

# 追问

- ORC 有什么优势？
