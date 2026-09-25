---
id: WAREHOUSE-0037
type: technical
question: 搭建一条数据链路的整体思路是什么
topic: [warehouse, data-pipeline]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-shopee-data-dev
    company: 虾皮
    position: 数据开发（二面）
    date: 2026-09-24
---

# 一句话

从业务需求和口径出发，倒推设计采集、建模、调度、质量和治理的完整链路。

# 30 秒回答

明确数据源和业务目标 -> 定口径 -> 采集/传输 -> 分层建模 -> 调度编排 -> 质量监控 -> 元数据/血缘 -> 上线运维，过程中考虑复用和治理。

# 1 分钟回答

- 需求：业务口径、指标、时效
- 采集：数据源、接入方式、实时/离线
- 建模：分层、事实/维度
- 调度：依赖编排、SLA
- 质量：DQC、对账、监控
- 治理：元数据、血缘、成本

# 追问

- 实时和离线链路怎么选？
- 链路上最容易出问题的是哪一环？
