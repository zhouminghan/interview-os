---
id: FLINK-0612
type: technical
question: API 选择：DataStream / DataSet / Table
difficulty: 0
topic: []
source_type: knowledge
---

| API | 场景 | 抽象层次 |
|-----|------|---------|
| **DataStream** | 流处理 | 中 |
| **DataSet** | 批处理 | 中 |
| **Table API** | SQL 声明式 | 高 |

批流统一后，推荐用 DataStream + Table API。
