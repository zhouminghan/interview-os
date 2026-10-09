---
id: STORAGE-0355
type: technical
question: 详细讲解HBase的查询优化策略。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RowKey、缓存、过滤器综合优化。

# 参考回答

查询优化靠 RowKey 设计贴合查询、BlockCache 命中、Bloom Filter 减读、过滤器减少扫描。点查用 get，范围查设好起止。

# 追问

- 查询优化核心是什么？
