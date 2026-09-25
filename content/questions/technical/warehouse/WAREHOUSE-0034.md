---
id: WAREHOUSE-0034
type: technical
question: 如何避免重复建表，别人不知道已有同一张表
topic: [warehouse, governance, duplicate]
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

靠资产平台登记、指标字典、命名规范和新建前检索，避免重复建表。

# 30 秒回答

资产平台登记所有表；指标字典查已有指标；命名规范便于检索；新建前先搜血缘和资产；统一建模评审；治理扫描发现重复。

# 1 分钟回答

- 资产平台：表/指标唯一登记
- 指标字典：查已有口径，避免另起炉灶
- 血缘检索：新建前看是否已有
- 命名规范：统一前缀便于识别
- 评审 + 治理：扫描重复、合并

# 追问

- 资产平台要记录哪些信息？
- 怎么发现存量重复表？
