---
id: STARROCKS-0022
type: technical
question: StarRocks 支持哪些数据模型？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

明细、聚合、主键、更新四类模型。

# 参考回答

StarRocks 支持明细模型、聚合模型、主键模型、更新模型。明细存原始明细，聚合写入时预聚合，主键模型按主键覆盖更新，更新模型支持部分列更新。选型看数据是明细、要聚合还是频繁更新。

# 追问

- 主键模型和更新模型有什么区别？
