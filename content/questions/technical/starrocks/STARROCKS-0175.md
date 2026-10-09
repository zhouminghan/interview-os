---
id: STARROCKS-0175
type: technical
question: StarRocks 与传统数据仓库的集成方案有哪些？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

从 Hive 等离线数仓导入或外表查询，做查询加速层。

# 参考回答

常见做法是 StarRocks 做离线数仓之上的查询加速层，结果表从 Hive 导入，或直接外表查。这样兼顾离线数仓的稳定和 StarRocks 的快。

# 追问

- 查询加速层是什么模式？
