---
id: FLINK-0161
type: technical
question: 如何解决Flink与外部系统的连接问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

检查网络、超时、重试、连接池。

# 参考回答

连接问题查网络、地址、超时和重试配置，连接池大小。加指数退避重试，别让单次失败拖垮作业。

# 追问

- 指数退避重试怎么做？
