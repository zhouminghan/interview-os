---
id: WAREHOUSE-0025
type: technical
question: 项目中的指标你们是怎么对比的
topic: [warehouse, metrics, reconciliation]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
---

# 一句话

指标对比就是新旧口径/跨层/跨链路对账，验证结果一致性。

# 30 秒回答

新旧口径双跑对比、跨层对账（DWD/DWS/ADS）、总量 + 分维度对账、抽样比对，用自动化对账工具发现偏差。

# 1 分钟回答

- 新旧口径：同一指标新老逻辑双跑，比对结果
- 跨层对账：DWD -> DWS -> ADS 层层对账
- 维度对账：总量 + 按维度拆分比对
- 抽样：抽关键明细人工复核
- 工具：自动化对账、偏差告警

# 追问

- 对账不一致怎么定位？
- 对比的粒度和频率怎么定？
