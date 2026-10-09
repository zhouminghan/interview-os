---
id: FLINK-0372
type: technical
question: 如何使用FlinkSQL实现实时指标计算系统？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实时聚合指标，写查询层供下游用。

# 参考回答

实时指标用 Flink SQL 做实时聚合，配窗口算分钟级或小时级指标，写到 Doris、Redis 或消息队列。下游看板或服务直接查。核心是口径和实时性。

# 追问

- 指标口径怎么统一？
