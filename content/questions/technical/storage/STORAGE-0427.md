---
id: STORAGE-0427
type: technical
question: Clickhouse支持哪些主要的数据引擎？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

MergeTree 族最核心。

# 参考回答

ClickHouse 表引擎有 MergeTree 族（最核心）、Log、Memory、Distributed、Replicated 等。MergeTree 用于分析，Log 用于小表临时，Memory 内存表。

# 追问

- 常用哪个引擎？
