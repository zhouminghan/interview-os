---
id: STORAGE-0529
type: technical
question: 什么是Clickhouse的查询缓存？如何配置？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

缓存查询结果，重复查询直接返回。

# 参考回答

查询缓存配置开启，设缓存大小和时间。相同查询命中直接返回。适合重复查询，注意数据变更要失效。默认关闭。

# 追问

- 缓存什么时候开？
