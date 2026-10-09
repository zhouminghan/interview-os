---
id: STORAGE-0599
type: technical
question: Clickhouse的查询结果缓存如何配置？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

开启查询缓存，设大小时间。

# 参考回答

查询结果缓存配置开启，设缓存大小和过期时间。重复查询命中直接返回。注意数据变更要失效。

# 追问

- 缓存怎么配？
