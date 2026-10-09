---
id: STORAGE-0331
type: technical
question: 详细讲解HBase的读取性能优化方案。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

BlockCache、Bloom Filter、RowKey 设计。

# 参考回答

读优化靠 BlockCache 命中、Bloom Filter 减少无效读、RowKey 设计贴合查询、过滤器减少扫描。点查优化 get 别用 scan。

# 追问

- 读慢怎么排查？
