---
id: FLINK-0221
type: technical
question: 什么是水印(Watermark)？在FlinkSQL中如何定义和使用水印？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

在 DDL 里用 WATERMARK FOR 定义。

# 参考回答

SQL 里定义 watermark 是在建表 DDL 里用 WATERMARK FOR 时间列 AS 时间减延迟。比如减去 5 秒容忍乱序。

# 追问

- 乱序延迟设多少？
