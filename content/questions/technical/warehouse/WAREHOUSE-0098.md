---
id: WAREHOUSE-0098
type: technical
question: 外卖场景如何设计离线数仓
topic: [warehouse, design]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-05-20-meituan-data-dev1
    company: 美团
    position: 数据开发（社招，一面）
    date: 2026-05-20
---

# 一句话

按 ODS/DWD/DIM/DWS/ADS 分层，订单为主体，围绕订单、商户、用户、配送划分主题域。

# 30 秒回答

主体是订单：下单、支付、退款、配送各状态。DWD 做订单/商户/用户明细清洗，DIM 存商户/用户/地理维度，DWS 按订单、流量、配送做汇总，ADS 出报表（GMV、客单价、配送时效）。

# 1 分钟回答

- 主体：订单（累积快照事实表记录下单/接单/送达各节点时间）
- 主题域：订单、商户、用户、配送、营销
- 维度：商户、用户、城市/商圈、时间、品类
- DWS 汇总：订单量/GMV/客单价、配送时效、商圈热度
- 典型需求：配送时效、商圈分析、用户复购，围绕这些设计宽表

# 追问

- 外卖订单的累积快照表怎么设计？
- 配送时效指标怎么算？
