---
id: STARROCKS-0045
type: technical
question: StarRocks 中如何使用 CTE（公用表表达式）？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CTE 是临时命名结果集，用 WITH 定义，可复用。

# 参考回答

CTE 就是 WITH 定义的公用表表达式，把一个子查询起个名，后面多次引用，逻辑更清晰。StarRocks 支持 CTE，优化器也可能对它做物化或内联。比重复写子查询好读。

# 追问

- CTE 和子查询有什么区别？
