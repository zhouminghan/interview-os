---
id: WAREHOUSE-0146
type: technical
question: 谈谈你对实时数据仓库的理解，以及它与传统数据仓库的区别。
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实时数仓用流处理做到秒级可见，传统离线是 T+1。

# 参考回答

传统数仓是 T+1 批量加工，昨天数据今天看；实时数仓用 Flink、Kafka 加 Doris 这类，数据进来秒级就能查。区别在时效、架构复杂度和成本。实时适合大屏、风控、实时监控，离线适合日报、复杂分析。现在多是流批一体，一套链路兼顾。

# 追问

- 实时数仓的迟到数据怎么处理？
- 流批一体怎么保证口径一致？
