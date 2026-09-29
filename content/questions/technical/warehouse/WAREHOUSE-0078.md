---
id: WAREHOUSE-0078
type: technical
question: 数据质量规则怎么按字段特征分类固化
topic: [warehouse, data-quality]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

枚举值字段做合规校验，核心关联字段做非空/唯一校验，数值字段做波动监控，时间字段做合理性校验。

# 30 秒回答

有限取值字段（类型、平台）做枚举值监控；join/去重关键字段（ID）做空值/唯一监控；数值指标做日环比波动；时间做合理性（不早于上线、不晚于当前）。

# 追问

- 空值监控适合哪些字段？
- 规则怎么沉淀到平台？
