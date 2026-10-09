---
id: STARROCKS-0075
type: technical
question: 如何利用物化视图加速查询？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

把常用聚合结果预计算，查询命中直接复用。

# 参考回答

物化视图把高频的 group by 聚合提前算好，查询命中就透明改写复用，省掉实时聚合。适合维度固定、查询频繁的场景，代价是占存储和刷新成本。

# 追问

- 物化视图刷新延迟怎么处理？
