---
id: WAREHOUSE-0051
type: technical
question: 讲一下你处理数据的流程
topic: [warehouse, data-process]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-25-xunlei-data-dev
    company: 迅雷
    position: 资深数据开发（一面）
    date: 2026-09-25
---

# 一句话

数据流程是从采集、分层加工到交付应用、质量监控的完整链路。

# 30 秒回答

数据源接入 -> ODS 贴源 -> DWD 清洗 -> DWS 汇总 -> ADS 应用，配合调度、质量校验和血缘，最终交付报表/应用。

# 1 分钟回答

- 采集：数据源接入、同步/入湖
- 加工：ODS/DWD/DWS/ADS 分层
- 调度：任务编排、定时
- 质量：校验、对账、监控
- 交付：报表、应用、接口

# 追问

- 你流程里哪一步最容易出问题？
- 实时和离线流程怎么衔接？
