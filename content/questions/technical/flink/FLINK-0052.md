---
id: FLINK-0052
type: technical
question: Flink SQL的执行过程是怎样的？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SQL 解析、优化、转执行图执行。

# 参考回答

Flink SQL 先解析成逻辑计划，经过优化器做规则和成本优化，再转成物理执行图，最后翻译成 DataStream 或批任务执行。

# 追问

- Flink 的优化器叫什么？
