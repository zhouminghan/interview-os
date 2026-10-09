---
id: FLINK-0375
type: technical
question: 解释如何使用FlinkSQL实现复杂事件处理(CEP)。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 MATCH_RECOGNIZE 做模式匹配。

# 参考回答

Flink SQL 用 MATCH_RECOGNIZE 定义事件序列模式，支持连续、可选、重复和时间约束，匹配事件流输出结果。是 SQL 版的 CEP。

# 追问

- 复杂模式 SQL 表达不了怎么办？
