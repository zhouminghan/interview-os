---
id: STORAGE-0452
type: technical
question: Clickhouse如何处理高并发写入？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

批量写，避免频繁小写入。

# 参考回答

ClickHouse 高并发写靠批量写入，一次写一批，后台合并。频繁小写入会导致大量数据块，影响性能。用 Buffer 表或攒批写。

# 追问

- 小批量写为什么不好？
