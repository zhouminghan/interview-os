---
id: STORAGE-0468
type: technical
question: Clickhouse的日志引擎有哪些应用场景？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

日志引擎存小表临时数据。

# 参考回答

日志引擎有 TinyLog、Log、StripeLog，适合小数据量、临时表、测试。不支持索引和分区，数据量大了别用。

# 追问

- 日志引擎和 MergeTree 区别？
