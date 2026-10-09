---
id: FLINK-0298
type: technical
question: FlinkSQL与DataStream API如何互操作？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 fromDataStream 和 toDataStream 互转。

# 参考回答

Table API 和 DataStream 可以互转：DataStream 用 fromDataStream 转成表，表用 toDataStream 转回流。这样复杂逻辑用 DataStream 写，声明式部分用 SQL 写。

# 追问

- 互转时 schema 怎么处理？
