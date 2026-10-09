---
id: STARROCKS-0036
type: technical
question: StarRocks 支持哪些 SQL 语法？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

兼容 MySQL 协议和大部分标准 SQL，含窗口函数、子查询、CTE。

# 参考回答

StarRocks 兼容 MySQL 协议，标准 SQL 基本都支持，包括 join、子查询、CTE、窗口函数、聚合函数。也支持一些分析型扩展，比如 ARRAY、JSON 类型。所以 MySQL 用户上手成本很低。

# 追问

- 和标准 SQL 有什么差异？
