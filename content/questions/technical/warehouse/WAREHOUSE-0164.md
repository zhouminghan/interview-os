---
id: WAREHOUSE-0164
type: technical
question: 事实表和维度表的区别是什么？
difficulty: 0
topic: []
source_type: knowledge
---

**事实表**存储可度量的事件（订单、支付、点击），通常包含指向维度表的外键。
**维度表**存储描述性属性（用户、商品、日期），为切片和过滤提供上下文。
事实表回答"发生了什么"，维度表回答"谁/什么/在哪里/什么时候"。

---
