---
id: FLINK-0331
type: technical
question: 解释FlinkSQL中的SQL优化器如何进行规则优化和成本优化。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

规则优化改写计划，成本优化选物理执行方式。

# 参考回答

规则优化按固定规则改写逻辑计划，比如谓词下推、列裁剪；成本优化基于统计信息估算代价，选最优的 join 顺序和策略。两者结合生成执行计划。

# 追问

- 统计信息不准会怎样？
