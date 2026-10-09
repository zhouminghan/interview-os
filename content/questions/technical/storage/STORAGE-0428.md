---
id: STORAGE-0428
type: technical
question: MergeTree引擎的核心特性是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按排序键组织，后台合并数据块。

# 参考回答

MergeTree 按排序键组织数据，后台合并小的数据块。支持分区、主键、TTL。是 ClickHouse 分析场景最常用的引擎。

# 追问

- MergeTree 为什么快？
