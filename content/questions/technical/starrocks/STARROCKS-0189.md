---
id: STARROCKS-0189
type: technical
question: 如何优化 StarRocks 中的子查询？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

子查询改 join 或 CTE，交给优化器改写。

# 参考回答

子查询能改 join 就改 join，能提 CTE 就提 CTE，让优化器更好处理。相关子查询最容易慢，优先改写。看执行计划确认是否被优化。

# 追问

- 相关子查询为什么慢？
