---
id: STORAGE-0448
type: technical
question: Clickhouse支持的数据类型有哪些特殊之处？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

有 LowCardinality、Nullable 等特殊类型。

# 参考回答

ClickHouse 有 LowCardinality 低基数字符串省空间、Nullable 允许空值、数组、Tuple 等。特殊类型适合特定场景优化。

# 追问

- LowCardinality 有什么用？
