---
id: WAREHOUSE-0059
type: technical
question: Lambda 架构和 Kappa 架构的区别
topic: [warehouse, architecture]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

Lambda 是批流双链路（批处理层 + 速度层 + 服务层），Kappa 是全量走流、通过重放回刷。

# 30 秒回答

Lambda 用批处理保证准确、用流处理保证低延迟，两套逻辑需维护；Kappa 只保留流链路，历史通过消息重放回算，架构简单但依赖可重放的存储。

# 1 分钟回答

- Lambda：批处理层（准确）+ 速度层（实时）+ 服务层（合并），双链路成本高
- Kappa：单一流链路，用 Kafka 等可重放存储回刷历史
- 选择：Kappa 简单、适合流为主；Lambda 成熟、批流兼顾

# 追问

- Kappa 怎么做历史回刷？
- 为什么 Kappa 更流行？
