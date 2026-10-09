---
id: FLINK-0374
type: technical
question: 如何使用FlinkSQL实现实时ETL流程？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SQL 做清洗、转换、join，再写目标。

# 参考回答

实时 ETL 用 Flink SQL 从 Kafka 或 CDC 读，写 SQL 做清洗、过滤、转换、join，再写到目标库或数据湖。SQL 声明式，开发和维护简单。

# 追问

- 复杂 ETL 还用 SQL 吗？
