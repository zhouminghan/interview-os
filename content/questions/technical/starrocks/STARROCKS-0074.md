---
id: STARROCKS-0074
type: technical
question: StarRocks 中的索引有哪些类型？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

主要有前缀索引、Bitmap 索引、Bloom Filter 索引。

# 参考回答

StarRocks 索引分几类：前缀索引是排序键自带的，Bitmap 适合低基数等值过滤，Bloom Filter 适合高基数等值判断。根据查询的过滤字段类型来选。

# 追问

- Bitmap 索引和 Bloom Filter 的区别？
