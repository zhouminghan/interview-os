---
id: STORAGE-0404
type: technical
question: 分享一个HBase的实时查询优化案例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RowKey 加缓存加 Bloom 优化。

# 参考回答

实时查询优化靠 RowKey 贴合查询、BlockCache 命中、Bloom Filter 减读。点查用 get。一个案例优化后 P99 延迟降了一半。

# 追问

- 实时查询怎么优化？
