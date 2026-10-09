---
id: STORAGE-0481
type: technical
question: Clickhouse支持UPDATE和DELETE操作吗？如何实现？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

支持但代价高，是重写操作。

# 参考回答

ClickHouse 支持 UPDATE 和 DELETE，但底层是重写数据块，代价高。适合批量低频更新。高频更新不适合，用别的引擎。

# 追问

- 更新为什么代价高？
