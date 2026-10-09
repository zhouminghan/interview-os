---
id: STARROCKS-0116
type: technical
question: StarRocks 如何支持机器学习功能？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

StarRocks 本身不是 ML 引擎，主要做特征查询和快速取数。

# 参考回答

StarRocks 不是机器学习平台，它的定位是给 ML 提供海量特征数据的快速查询和聚合。可以算一些基础统计和向量检索，真正训练还是交给专门框架。

# 追问

- 特征查询为什么适合用 StarRocks？
