---
id: STORAGE-0409
type: technical
question: 在生产环境中如何进行HBase的压力测试？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用压测工具模拟真实负载。

# 参考回答

压力测试用 HBase 自带的 PerformanceEvaluation 或自建压测，模拟真实读写负载，测吞吐和延迟。压测别影响生产，用独立集群。

# 追问

- 压测用什么工具？
