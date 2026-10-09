---
id: STORAGE-0610
type: technical
question: 解释Clickhouse的内存表使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

内存表存临时和热点数据。

# 参考回答

Memory 引擎表存内存，查快但不持久。适合临时表、小维表、热数据缓存。重启数据丢，别放重要数据。

# 追问

- 内存表什么时候用？
