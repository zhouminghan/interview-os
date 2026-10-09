---
id: FLINK-0395
type: technical
question: 如何使用FlinkSQL实现数据湖和数据仓库的融合架构？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink 流写数据湖，湖做湖仓一体底座。

# 参考回答

湖仓融合用 Flink SQL 流式写入 Iceberg、Paimon 这类数据湖，湖做统一存储，上面做实时和离线查询。流批一体加湖仓一体。

# 追问

- 湖仓一体的好处？
