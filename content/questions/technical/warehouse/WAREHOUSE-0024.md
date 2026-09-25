---
id: WAREHOUSE-0024
type: technical
question: 一百多张表有没有主题划分，怎么划分
topic: [warehouse, subject-domain]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
---

# 一句话

表按「主题域」划分，主题域内再按数仓分层组织。

# 30 秒回答

先按业务主题域划分（交易、用户、商品、营销、流量、财务等），每个主题域内再按 ODS/DWD/DWS/ADS 分层，配合统一命名规范。

# 1 分钟回答

- 主题域：交易、用户、商品、营销、流量、财务、供应链等
- 分层：主题域内再分 ODS/DWD/DWS/ADS
- 命名：前缀带主题域和分层，如 dwd_trade_xxx
- 好处：职责清晰、便于检索、权限和治理按域管理

# 追问

- 主题域怎么确定边界？
- 跨主题域的表怎么归属？
