---
id: WAREHOUSE-0128
type: technical
question: 请解释一下数据仓库中的星型模式和雪花模式的区别。
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

星型维度表不拆、join 少；雪花维度表拆细、冗余少但 join 多。

# 参考回答

星型是事实表直接连维度表，维度表保留冗余，结构简单、查询快；雪花把维度表继续规范化，拆成多张小表，省存储但查询要 join 更多层，性能差一点。数仓为了查询快，基本都选星型，存储冗余无所谓，反正便宜。

# 追问

- 星型模型的冗余会带来什么问题？
- 什么场景下反而会选雪花？
