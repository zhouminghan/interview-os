---
id: STORAGE-0471
type: technical
question: 什么是Clickhouse的分布式查询执行计划？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

查询分发到各分片，结果汇总。

# 参考回答

分布式查询计划把查询拆到各分片节点并行执行，中间结果再聚合返回。分布式表做分发。分片越多并行越高。

# 追问

- 分布式计划怎么生成？
