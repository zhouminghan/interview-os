---
id: WAREHOUSE-0039
type: technical
question: 从底层数据到应用层数据，就是你的开发工作模式吗
topic: [warehouse, layering]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-25-banmu-huadao
    company: 半亩花田
    position: 数据开发（校招）
    date: 2026-09-25
---

# 一句话

是，典型数仓开发就是分层加工：ODS -> DWD -> DWS -> ADS。

# 30 秒回答

从贴源层 ODS 到明细 DWD、汇总 DWS，再到应用 ADS，逐层加工，应用直接消费 ADS 层结果，这就是分层开发模式。

# 1 分钟回答

- ODS：原始数据落地
- DWD：清洗明细
- DWS：汇总指标
- ADS：应用宽表
- 好处：解耦、复用、可回溯

# 追问

- 有没有跨层直接取数的场景？
