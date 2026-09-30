---
id: WAREHOUSE-0274
type: technical
question: 什么是星型模型，有什么好处？
difficulty: 0
topic: []
source_type: knowledge
---

星型模型有一个中心事实表，连接多个维度表。好处包括：
- 查询更简单
- 连接路径清晰
- 性能好（连接通常是事实表 → 维度表，多对一）
- 鼓励指标和属性的定义保持一致
- 互联网场景首选
