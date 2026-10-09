---
id: STORAGE-0097
type: technical
question: 什么是Hive的DISTRIBUTE BY？它和GROUP BY有什么区别？在什么场景下应该使用DISTRIBUTE BY？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

DISTRIBUTE BY 控制数据分到哪个 reducer。

# 参考回答

DISTRIBUTE BY 按字段 hash 决定数据去哪个 reducer，不做聚合。GROUP BY 做分组聚合。DISTRIBUTE BY 用来配合 SORT BY 做分区内排序，控制数据分布。

# 追问

- DISTRIBUTE BY 和 GROUP BY 区别？
