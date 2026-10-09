---
id: STARROCKS-0113
type: technical
question: 如何在 StarRocks 中设计预聚合表？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

预聚合表把常用聚合提前算好，等价于聚合模型或物化视图。

# 参考回答

预聚合就是提前把常用维度的聚合结果算好存下来，可以用聚合模型，也可以建物化视图。设计要点是聚合维度要覆盖高频查询。

# 追问

- 聚合模型和物化视图怎么选？
