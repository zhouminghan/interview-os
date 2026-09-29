---
id: WAREHOUSE-0094
type: technical
question: 数据采集怎么做，如何保证稳定性
topic: [warehouse, ingestion]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-07-03-bytedance-data-dev-liangjing
    company: 字节跳动
    position: 数据开发（实习）
    date: 2026-07-03
---

# 一句话

采集分埋点上报和后台流水同步两条链路；稳定性靠埋点规范、同步平台断点续传/幂等、监控告警、数据对账。

# 30 秒回答

埋点：前端 SDK → 上报平台 → ODS 埋点表；流水：业务库 → 同步平台 → ODS 流水表。稳定性：埋点先规范文档化 + review；同步平台支持断点续传、幂等、回补；配置延迟/量级监控告警；定期和源端对账。

# 1 分钟回答

- 埋点上报：SDK 采集 → 平台 → ODS，小时级
- 流水接入：业务库 → 同步任务 → ODS，小时级
- 稳定性保障：埋点规范 + 新功能上线前 review；同步断点续传 + 幂等 + 回补；量级/延迟监控 + 熔断；定期对账防丢

# 追问

- 埋点规范和流水接入的稳定性难点分别是什么？
- 数据对账怎么做？
