---
id: WAREHOUSE-0087
type: technical
question: DWM 层模型会被业务方直接使用吗
topic: [warehouse, dwm]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-05-12-kuaishou-bigdata-intern
    company: 快手
    position: 大数据开发（实习）
    date: 2026-05-12
---

# 一句话

一般不会，DWM 是 DWS 的前置中间汇总层，主要给上游 DWS/ADS 复用，不直接暴露给业务方。

# 30 秒回答

DWM 是「轻度汇总的中间结果」，比如用户每日行为汇总、频道每日指标汇总，存在意义是为多个 DWS 宽表共享中间计算、避免重复。业务方对接的是 DWS 宽表或 ADS 应用表。

# 1 分钟回答

- 定位：DWS 的前置汇总层，口径可能不完整（还没拼维度）
- 消费方：主要是下游 DWS 或其他 DWM，层间消费有方向约束
- 不给业务直读的原因：口径不完整 + 内部变动频率比 DWS 高，直读容易踩坑
- 复用价值：「用户日活汇总」可能被用户/活跃/留存多个主题宽表用到，沉淀成 DWM 即可复用

# 追问

- DWM 和 DWS 的边界怎么划？
- 业务方直接读 DWM 会有什么问题？
