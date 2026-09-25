---
id: WAREHOUSE-0029
type: technical
question: 熔断和告警的策略是什么，哪些熔断、哪些只告警
topic: [warehouse, data-quality, alert]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
---

# 一句话

熔断阻断严重问题，告警提示一般异常，按影响面分级。

# 30 秒回答

熔断：核心链路、数据严重错误、SLA 风险、影响面大时直接阻断任务；告警：波动超阈值、非致命异常、及时性延迟时通知但不阻断。

# 1 分钟回答

- 熔断场景：数据严重错误、核心指标异常、会污染下游、SLA 必违
- 告警场景：波动超阈值、及时性延迟、非核心异常
- 分级：核心指标熔断，一般指标告警
- 原则：阻断要谨慎，避免误伤链路

# 追问

- 熔断后怎么恢复？
- 怎么避免误熔断？
