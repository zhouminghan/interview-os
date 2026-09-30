---
id: WAREHOUSE-0281
type: technical
question: 什么是桥接表，什么时候需要它？
difficulty: 0
topic: []
source_type: knowledge
---

**桥接表**解决多对多关系，例如商品属于多个类目，或用户拥有多个角色。它也可以存储分配权重（例如收入拆分）。没有桥接表，连接会导致行数爆炸，破坏聚合结果。
