---
id: STORAGE-0489
type: technical
question: 如何使用Clickhouse的JSON函数解析JSON数据？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

JSONExtract 系列函数解析。

# 参考回答

用 JSONExtract 系列函数按 key 提取 JSON 值，或 visitParamExtract 简化。JSON 类型也支持。大量解析慢，尽量拆列。

# 追问

- JSON 解析慢吗？
