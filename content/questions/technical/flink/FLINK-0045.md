---
id: FLINK-0045
type: technical
question: Flink SQL与其他SQL引擎（如Hive）的区别是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink SQL 面向流和实时，Hive 面向离线批。

# 参考回答

Flink SQL 能处理流数据，支持事件时间、窗口、动态表，实时计算；Hive SQL 是离线批处理，面向 T+1。Flink SQL 也能查 Hive 表，但执行引擎和场景不同。

# 追问

- Flink SQL 查 Hive 表怎么配？
