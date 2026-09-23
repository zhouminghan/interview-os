---
id: WAREHOUSE-0007
type: technical
question: DWS 层一般怎么命名，举例说明
topic: [warehouse, dws, naming]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-18-bytedance-douyin
    company: 字节跳动
    position: 大数据开发（实习）
    date: 2026-09-18
---

# 一句话

DWS 命名通常体现「主题域 + 业务过程 + 粒度 + 统计周期」，方便按域和周期检索。

# 30 秒回答

常见规范：`dws_主题域_业务过程_粒度_周期`，例如 `dws_trade_user_order_1d`（交易域-用户-订单-1天）、`dws_user_behavior_1d`。

# 1 分钟回答

- 主题域：trade、user、content 等
- 业务过程：下单、支付、曝光、点击等
- 粒度：user、item、category、region 等
- 周期：1d、7d、30d、td（累计至今）
- 举例：`dws_trade_user_pay_1d`、`dws_content_item_expose_7d`

# 追问

- DWS 粒度怎么选？
- 为什么要分 1d/7d/30d 多个周期？
- DWS 和 ADS 的边界在哪里？
