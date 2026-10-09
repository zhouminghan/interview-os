---
id: FLINK-0140
type: technical
question: 如何用Flink实现实时仪表盘（Dashboard）？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实时聚合指标，写查询层供大屏展示。

# 参考回答

实时仪表盘用 Flink 实时聚合指标，写到 Doris、Redis 这类查询层，前端大屏定时查询刷新。链路是 Flink 算，查询层出。

# 追问

- 大屏链路怎么设计？
