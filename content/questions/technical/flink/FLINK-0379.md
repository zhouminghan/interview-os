---
id: FLINK-0379
type: technical
question: 解释如何使用FlinkSQL实现电商实时大屏系统。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实时聚合核心指标，写查询层供大屏。

# 参考回答

电商大屏用 Flink SQL 实时聚合 GMV、订单、UV 等核心指标，写到 Doris 或 Redis，前端大屏定时查询秒级刷新。链路是 Flink 算，查询层出。

# 追问

- 大屏指标怎么分层算？
