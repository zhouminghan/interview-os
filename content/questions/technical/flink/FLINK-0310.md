---
id: FLINK-0310
type: technical
question: 解释FlinkSQL的查询优化过程及优化器的工作原理。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

逻辑规则优化加成本优化选物理计划。

# 参考回答

Flink SQL 优化器先做规则优化，比如谓词下推、列裁剪、子查询改写，再用成本模型选物理执行方式，比如 join 策略。基于 Calcite 框架实现。

# 追问

- 规则优化和成本优化区别？
