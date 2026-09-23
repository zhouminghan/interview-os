---
id: WAREHOUSE-0010
type: technical
question: DWS 口径是公用的，如何统一维护、保证多方口径对齐
topic: [warehouse, metrics, governance]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-pdd-data-dev
    company: 拼多多
    position: 数据开发（社招）
    date: 2026-09-21
---

# 一句话

靠「文档 + 资产平台 + 层级对账 + 质量监控」四件事，把口径唯一化、可追踪、可校验。

# 30 秒回答

用指标字典统一定义和公式；录入资产平台做唯一入口和血缘；不同层级（DWS 与 ADS/DWD）做对账；用质量监控和波动告警发现口径漂移。

# 1 分钟回答

- 文档：指标字典，统一命名、公式、维度、口径
- 资产平台：指标注册、血缘管理，唯一入口（容易漏但很重要）
- 层级对账：DWS 与 ADS/DWD 比对，校验一致性
- 质量监控：指标波动、口径漂移、空值/异常告警
- 治理机制：口径评审、变更审批、责任 owner

# 追问

- 指标字典里要包含哪些字段？
- 血缘在口径治理里有什么用？
- 口径漂移怎么自动发现？
