---
id: STARROCKS-0004
type: technical
question: 主键模型和明细模型的使用场景
topic: [starrocks, data-model]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-23-anker-data
    company: 安克创新
    position: 数据岗（一面）
    date: 2026-09-23
---

# 一句话

明细模型留全量流水，主键模型按主键去重保最新状态。

# 30 秒回答

明细模型适合日志、行为流水等需要保留每条明细、无更新的场景；主键模型适合订单状态、用户维表、实时更新宽表等需要 upsert/删除的场景。

# 1 分钟回答

- 明细模型：保留原始明细、无去重，适合流水类、追加写
- 主键模型：按主键 upsert，保证唯一和最新，支持更新/删除
- 例子：曝光点击日志用明细，订单最新状态/维表用主键

# 追问

- 主键模型写入比明细慢吗？
- 明细模型能去重吗？
