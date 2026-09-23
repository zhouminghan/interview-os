---
id: WAREHOUSE-0016
type: technical
question: 跨天退款如何计算日交易额，避免重复扣减
topic: [warehouse, metrics, refund]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-jiukun-data-dev
    company: 九坤
    position: 数据开发（一面）
    date: 2026-09-21
---

# 一句话

核心是统一口径（退款按申请还是完成时间）并用订单号关联、流水幂等去重，避免退款在申请日和完成日各扣一次。

# 30 秒回答

日交易额 = 当日支付金额 - 当日退款完成金额（按退款完成时间口径）。退款流水关联原订单，按退款单号去重，跨天退款只按完成时间扣一次。

# 1 分钟回答

- 口径二选一：按退款申请时间 or 完成时间，全链路统一
- 数据：支付流水 + 退款流水按订单号对账
- 净额：支付 - 退款，部分退款按金额拆分
- 幂等：退款单号去重，避免重复扣减
- 跨天：事件时间归集，申请日和完成日只记一次

# 追问

- 按申请时间和完成时间各有什么优劣？
- 退款和原订单怎么关联？
- 部分退款怎么处理？
