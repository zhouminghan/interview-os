---
id: WAREHOUSE-0046
type: technical
question: 说说数仓分层架构
topic: [warehouse, layering]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-26-sunwoda-data-dev
    company: 欣旺达
    position: 数据开发（秋招）
    date: 2026-09-26
---

# 一句话

数仓通常分 ODS 贴源、DWD 明细、DWS 汇总、ADS 应用，再加 DIM 维表。

# 30 秒回答

ODS 原样落地，DWD 清洗成明细，DWS 按主题汇总公共指标，ADS 面向应用做宽表，DIM 存维度。分层解耦、复用、可回溯。

# 1 分钟回答

- ODS：贴源、原样落地
- DWD：清洗、规范化、明细
- DWS：主题汇总、公共指标
- ADS：应用宽表
- DIM：维表
- 原则：职责清晰、逐层收敛、公共层复用

# 追问

- 每层做什么、不做什么？
- 为什么要分层？
