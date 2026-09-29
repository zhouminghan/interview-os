---
id: WAREHOUSE-0067
type: technical
question: 业务域和主题域的区别是什么
topic: [warehouse, domain]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2025-03-24-jd-data-dev
    company: 京东
    position: 数据开发
    date: 2025-03-24
---

# 一句话

业务域按组织/业务流程划分，主题域按分析主题组织度量；实际落地常混用。

# 30 秒回答

业务域偏组织视角（交易域、物流域、支付域）；主题域偏数据分析视角（流量、内容、用户、搜推）。实际很多团队按主题域组织数仓，公共维度独立维护，减少跨域依赖。

# 1 分钟回答

- 业务域：按企业业务线/流程
- 主题域：按分析主题/度量维度
- 实践：常混用，按主题域组织 DWD/DWS
- 原则：域内聚合、跨域依赖少

# 追问

- 你项目怎么划分域？
- 公共维度放哪？
