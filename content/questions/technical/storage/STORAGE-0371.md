---
id: STORAGE-0371
type: technical
question: HBase的实时查询优化方案有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

点查优化 RowKey、缓存、Bloom。

# 参考回答

实时查询优化靠 RowKey 精确设计、BlockCache 命中、Bloom Filter 减读。点查用 get，别用 scan。客户端缓存也加速。

# 追问

- 实时查询为什么用 get？
