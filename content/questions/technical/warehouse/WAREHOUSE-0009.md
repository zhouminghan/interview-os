---
id: WAREHOUSE-0009
type: technical
question: DWS 和 ADS 最主要的差异，分层判断依据是什么
topic: [warehouse, dws, ads, layering]
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

DWS 是「公共汇总层」，面向复用、口径统一；ADS 是「应用层」，面向具体场景、口径专用。

# 30 秒回答

DWS 按主题做可复用的中度汇总，跨团队共享、口径统一；ADS 面向具体报表/产品做个性化宽表，口径专用。判断依据不是粒度，而是复用性、口径是否公共、下游数量。

# 1 分钟回答

- 放 DWS 的逻辑：跨团队/多报表复用的公共指标、主题域汇总（1d/7d/30d）、统一口径
- 放 ADS 的逻辑：单一应用专属加工、跨主题宽表、短期一次性指标、展示字段拼接
- 核心区别：DWS 面向复用，ADS 面向应用
- 判断依据：复用范围 + 口径稳定性 + 被多少下游使用；粒度只是表象
- 关键：DWS 可以给其他团队复用，ADS 通常专用

# 追问

- 如果某指标只有一个团队用，放 DWS 还是 ADS？
- DWS 和 DWD 的边界？
- 公共层加字段的代价？
