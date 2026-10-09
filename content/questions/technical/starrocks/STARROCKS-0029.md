---
id: STARROCKS-0029
type: technical
question: 什么是 Bucket？在 StarRocks 中的作用是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Bucket 分桶决定数据怎么分散到 BE，影响并行度和倾斜。

# 参考回答

分桶就是把一张表的数据按某列的 hash 分成多个桶，分散到不同 BE。作用一是并行查询，二是分布均匀避免倾斜。分桶字段一般选高基数的，桶数一般和 BE 数量成倍数。

# 追问

- 分桶数怎么确定？
