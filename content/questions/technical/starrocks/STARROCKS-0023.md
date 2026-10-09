---
id: STARROCKS-0023
type: technical
question: 什么是列式存储？StarRocks 为什么选择列式存储？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

列式存储按列连续存，分析时只读需要的列，压缩也好。

# 参考回答

列式存储就是同一列的数据存在一起，查询只扫涉及的列，省 IO；同列数据类型一致，压缩率高。OLAP 场景大多是查少数几列做聚合，所以列存天然比行存快。

# 追问

- 列式存储的缺点是什么？
