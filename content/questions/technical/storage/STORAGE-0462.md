---
id: STORAGE-0462
type: technical
question: Clickhouse的字符串处理有哪些优化？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

LowCardinality 和字符串函数优化。

# 参考回答

字符串优化用 LowCardinality 存低基数字符串省空间，字符串函数用优化的 SIMD 实现。编码选对，UTF-8 处理高效。

# 追问

- LowCardinality 怎么用？
