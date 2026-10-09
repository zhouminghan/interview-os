---
id: STARROCKS-0069
type: technical
question: 什么是谓词下推？StarRocks 如何实现？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

谓词下推是把过滤条件提前到扫描阶段，减少读取数据量。

# 参考回答

谓词下推就是把 where 条件尽量往下推到存储层，在扫描时就把不满足的数据过滤掉，而不是扫出来再过滤。StarRocks 在 Tablet 扫描和索引阶段就能用过滤条件，配合分区裁剪，能少读很多数据。

# 追问

- 谓词下推和分区裁剪的区别？
