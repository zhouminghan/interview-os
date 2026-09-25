---
id: WAREHOUSE-0033
type: technical
question: 分层是怎么设计的
topic: [warehouse, layering]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-shopee-data-dev
    company: 虾皮
    position: 数据开发（二面）
    date: 2026-09-24
---

# 一句话

典型分层是 ODS 贴源 -> DWD 明细 -> DWS 汇总 -> ADS 应用，再加 DIM 维表。

# 30 秒回答

ODS 保留原始数据；DWD 清洗成统一明细；DWS 按主题做公共汇总；ADS 面向应用做宽表；DIM 存维度属性。分层解耦、复用、可回溯。

# 1 分钟回答

- ODS：贴源、原样落地
- DWD：清洗、规范化、明细
- DWS：主题汇总、公共指标
- ADS：应用宽表
- DIM：维表
- 原则：职责清晰、逐层收敛、公共层复用

# 追问

- 为什么 DWD 不直接出应用结果？
- DWS 和 ADS 边界怎么划？
