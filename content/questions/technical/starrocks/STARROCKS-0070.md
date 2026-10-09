---
id: STARROCKS-0070
type: technical
question: StarRocks 的查询计划是如何生成的？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

先解析 SQL 成语法树，再逻辑优化、物理优化，最终生成可执行计划。

# 参考回答

查询计划生成分几步：SQL 解析成抽象语法树，做逻辑优化比如谓词下推、子查询改写，再基于成本选物理执行方式，比如 join 策略、聚合方式，最后生成分布到各 BE 的执行计划。

# 追问

- 逻辑优化和物理优化的区别？
