---
id: STARROCKS-0071
type: technical
question: 如何查看 StarRocks 的查询执行计划？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 EXPLAIN 看执行计划，分逻辑计划和物理计划。

# 参考回答

用 EXPLAIN 前缀看执行计划，能看到 join 顺序、join 方式、分区裁剪这些。分析慢查询先看计划里有没有全表扫、broadcast 选得对不对、统计信息是否过期。

# 追问

- 执行计划里重点看哪几项？
