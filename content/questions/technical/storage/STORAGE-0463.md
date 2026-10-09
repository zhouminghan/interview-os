---
id: STORAGE-0463
type: technical
question: 什么是Clickhouse的字典（Dictionary）？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

字典是外部键值映射，内存加速关联。

# 参考回答

Dictionary 从外部数据源加载键值映射到内存，查询时做维表关联和映射。类似维表，内存中查很快。支持定时刷新。

# 追问

- 字典和维表区别？
