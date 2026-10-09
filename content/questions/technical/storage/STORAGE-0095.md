---
id: STORAGE-0095
type: technical
question: 如何理解Hive的HAVING子句？它和WHERE子句有什么区别？在什么场景下应该使用HAVING？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

WHERE 过滤原始行，HAVING 过滤聚合结果。

# 参考回答

WHERE 在分组前过滤行，HAVING 在分组后过滤聚合结果。对聚合值的条件要用 HAVING，比如 count 大于多少。WHERE 能过滤的先过滤，减少计算。

# 追问

- 聚合条件能放 WHERE 吗？
