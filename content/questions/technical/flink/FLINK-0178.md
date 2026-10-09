---
id: FLINK-0178
type: technical
question: Flink SQL查询的优化过程是怎样的？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

逻辑优化规则加成本优化。

# 参考回答

Flink SQL 优化先是逻辑优化，做谓词下推、常量折叠这些规则改写，再用成本模型选物理执行方式。和 Calcite 优化器有关。

# 追问

- 逻辑优化和成本优化区别？
