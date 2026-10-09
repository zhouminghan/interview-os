---
id: FLINK-0228
type: technical
question: 如何在FlinkSQL中使用MATCH\_RECOGNIZE进行模式匹配？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 SQL 做模式匹配，类似 CEP。

# 参考回答

MATCH_RECOGNIZE 是 SQL 里的模式匹配，能做事件序列检测，类似 CEP。定义 pattern 和 measures 匹配事件流。

# 追问

- MATCH_RECOGNIZE 和 CEP 怎么选？
