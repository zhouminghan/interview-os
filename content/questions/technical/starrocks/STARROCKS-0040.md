---
id: STARROCKS-0040
type: technical
question: StarRocks 中如何实现分页查询？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 limit 加 offset，但深分页要注意性能。

# 参考回答

StarRocks 用 limit 和 offset 做分页。但 offset 很大时会扫很多数据，性能差，所以深分页一般配合排序键、或改成游标、或限制 offset 范围。实际业务很少做特别深的分页。

# 追问

- 深分页为什么慢？
