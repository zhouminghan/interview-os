---
id: STARROCKS-0038
type: technical
question: StarRocks 如何处理子查询？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

子查询交给优化器改写，优先转成 join 提升性能。

# 参考回答

StarRocks 的优化器会处理子查询，很多能改写成 join 或半连接，提升性能。写的时候尽量把相关子查询改成 join 或 CTE，避免逐行执行。执行计划里能看子查询是怎么被优化的。

# 追问

- 相关子查询和 join 哪个快？
