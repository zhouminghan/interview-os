---
id: WAREHOUSE-0163
type: technical
question: 什么是粒度，为什么这是首先要回答的问题？
difficulty: 0
topic: []
source_type: knowledge
---

粒度（grain）是表的详细程度，例如"每行对应一个订单行"或"每行对应用户某一天的数据"。它决定了哪些指标是可加的、连接如何行为，以及哪些字段可以作为唯一标识。如果粒度不清晰，就会出现重复行、聚合错误和键的歧义。

---
