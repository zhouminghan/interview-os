---
id: STORAGE-0554
type: technical
question: 如何优化Clickhouse的字符串处理性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

LowCardinality 和简单函数。

# 参考回答

字符串优化用 LowCardinality 存低基数字符串，用简单函数代替正则。字符串函数本身优化过，但复杂处理慢。

# 追问

- 字符串怎么优化？
