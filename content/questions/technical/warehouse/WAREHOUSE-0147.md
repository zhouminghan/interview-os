---
id: WAREHOUSE-0147
type: technical
question: 请介绍一下你在数据仓库项目中遇到的最具挑战性的技术问题。
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

最挑战的一般是海量数据下的性能和口径统一。

# 参考回答

我觉得最有挑战的是既要数据量大、时效高，又要口径绝对一致。比如高峰期几十亿条日志，要准实时出报表还不能跟离线对不上。解法是分层加宽表、预聚合、流批口径统一，再配一套严格的质量校验。

# 追问

- 怎么保证流批结果一致？
- 海量日志的实时聚合怎么做？
