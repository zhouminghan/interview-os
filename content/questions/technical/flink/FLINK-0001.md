---
id: FLINK-0001
type: technical
question: Kafka-Flink 中间状态怎么设计，如何处理迟到、重复和退款最新状态
topic: [flink, state, event-time]
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

按订单号 keyBy，用 ValueState 存「最新状态 + 最新事件时间/版本」，只接受更新的版本，解决迟到、重复和退款乱序。

# 30 秒回答

订单号做 key，状态里保存最新订单状态和事件时间。迟到事件用水位线和 allowedLateness 处理；重复发送按事件 ID/版本去重；退款场景比较事件时间，只更新比当前状态更新的事件。

# 1 分钟回答

- 状态：KeyedState/ValueState 按订单号存最新状态 + 最新事件时间 + 版本
- 迟到：Watermark + allowedLateness + 侧输出流，或定时器延迟处理
- 重复：按事件 ID/订单号+版本去重，只接受新版本
- 退款：下单 -> 退款乱序，用事件时间判断新旧，更新最新状态
- 清理：定时器清理过期状态，状态后端 RocksDB/内存

# 追问

- 状态怎么选（ValueState/MapState）？
- 迟到的退款事件怎么保证不覆盖新状态？
- 状态过大怎么清理？
