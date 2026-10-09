---
id: STARROCKS-0193
type: technical
question: 如何优化 StarRocks 中的条件过滤？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

过滤字段放排序键或加索引，谓词下推。

# 参考回答

条件过滤优化靠排序键加前缀索引、Bitmap 和 Bloom Filter 索引，再让谓词下推到扫描层。过滤字段选索引类型要对，低基数用 Bitmap、高基数用 Bloom。

# 追问

- 低基数和高基数怎么分？
