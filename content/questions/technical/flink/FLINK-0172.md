---
id: FLINK-0172
type: technical
question: 如何设计Flink与数据湖的集成架构？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink 流写数据湖，湖做存储和查询。

# 参考回答

Flink 和数据湖集成，流式写入 Iceberg、Hudi 这类数据湖，湖做存储底座，上面做批和查询。流批一体加湖仓一体。

# 追问

- Iceberg 和 Hudi 怎么选？
