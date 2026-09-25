---
id: WAREHOUSE-0031
type: technical
question: 当前数仓建模存在什么问题，有哪些可优化点
topic: [warehouse, modeling, governance]
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

常见问题是分层不规范、口径不统一、重复建表、公共层复用不足；优化围绕统一口径、标准建模和资产治理。

# 30 秒回答

问题：分层混乱、口径不统一、重复建表、粒度混乱、ADS 宽表膨胀、命名不规范、元数据缺失。优化：统一口径、标准分层、主题域建模、公共指标沉淀、资产平台、去重治理、血缘。

# 1 分钟回答

- 口径：指标字典统一，避免同指标多口径
- 分层：ODS/DWD/DWS/ADS 职责清晰
- 建模：维度建模、主题域、粒度一致
- 复用：DWS 公共汇总层沉淀，减少重复加工
- 治理：资产平台、血缘、命名规范、去重

# 追问

- 你怎么判断建模是否规范？
- 公共层复用不足会带来什么？
