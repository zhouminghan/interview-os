---
id: WAREHOUSE-0079
type: technical
question: 同环比监控阈值怎么设计才不会误报
topic: [warehouse, monitoring]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

工作日/周末分开设阈值，节假日白名单，只监控核心指标，阈值取历史波动分位数。

# 30 秒回答

日环比区分工作日/周末，节假日活动日做白名单排除，只对核心指标设同环比，阈值用过去一个月波动分布 P95。

# 追问

- 为什么长尾指标不设监控？
- 日环比和周环比各抓什么？
