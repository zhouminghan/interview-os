---
id: STARROCKS-0073
type: technical
question: 如何优化 StarRocks 中的慢查询？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看执行计划定位瓶颈，再调统计信息、索引、模型和 SQL。

# 参考回答

先 EXPLAIN 看计划，找最慢的算子；再看统计信息是否过期、要不要加物化视图或索引、排序键分桶合不合理、SQL 能不能改写。一步步定位，别瞎调。

# 追问

- 慢查询最常卡在哪一步？
