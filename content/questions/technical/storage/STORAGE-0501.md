---
id: STORAGE-0501
type: technical
question: 写出使用条件聚合的SQL查询示例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

sumIf、countIf 做条件聚合。

# 参考回答

条件聚合用 sumIf、countIf、avgIf 这些，按条件只聚合满足的数据。比如 countIf(条件) 统计满足条件的条数。省去 case when。

# 追问

- 条件聚合怎么用？
