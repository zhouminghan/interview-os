---
id: WAREHOUSE-0165
type: technical
question: 什么是星型模型，有什么好处？
difficulty: 0
topic: []
source_type: knowledge
---

星型模型有一个中心事实表，连接多个维度表。好处包括：
- 查询更简单
- 连接路径清晰
- 性能好，因为连接通常是事实表到维度表（多对一）
- 鼓励指标和属性的定义保持一致

---
