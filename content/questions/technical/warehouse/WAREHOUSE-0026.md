---
id: WAREHOUSE-0026
type: technical
question: 离线任务发布校验怎么规定（核心指标偏差 2% 全量发布）
topic: [warehouse, release, validation]
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

发布用「新旧链路双跑 + 核心指标偏差校验」，偏差在阈值内才全量发布。

# 30 秒回答

灰度/双跑跑新旧逻辑，对比核心指标的偏差，阈值内（如 2%）全量发布，超过则阻断、排查。校验覆盖总量、分维度、数据量、及时性。

# 1 分钟回答

- 双跑：新旧链路并行，对比核心指标
- 阈值：偏差超阈值阻断，阈值内全量
- 校验：核心指标、总量、分维度、数据量、SLA
- 流程：双跑 -> 对账 -> 审批 -> 全量 -> 监控

# 追问

- 偏差超阈值后怎么处理？
- 全量发布后还要监控多久？
