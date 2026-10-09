---
id: STORAGE-0495
type: technical
question: Clickhouse的子查询支持情况如何？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

支持子查询，但优化有限。

# 参考回答

ClickHouse 支持标量子查询、IN 子查询，但子查询优化不如传统库。复杂相关子查询性能一般，建议改写 join。

# 追问

- 子查询怎么优化？
