---
id: STORAGE-0474
type: technical
question: 解释Clickhouse的查询缓存机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

支持查询结果缓存。

# 参考回答

ClickHouse 新版本支持查询缓存，缓存查询结果，命中直接返回。适合重复查询。配置缓存大小和时间。默认关闭。

# 追问

- 缓存什么时候开？
