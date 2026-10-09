---
id: FLINK-0320
type: technical
question: 如何在FlinkSQL中创建和使用自定义水印生成器？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

在 DDL 里配 WATERMARK FOR 或用自定义策略。

# 参考回答

SQL 里 watermark 主要在 DDL 里用 WATERMARK FOR 定义，简单的减延迟就行。复杂的自定义生成策略要转 DataStream 用 WatermarkGenerator 实现。

# 追问

- 自定义 watermark 策略怎么实现？
