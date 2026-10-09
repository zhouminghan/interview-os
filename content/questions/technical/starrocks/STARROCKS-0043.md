---
id: STARROCKS-0043
type: technical
question: StarRocks 如何支持 JSON 数据类型？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 JSON 类型存半结构化数据，配合 json 函数解析。

# 参考回答

StarRocks 支持 JSON 类型，能存半结构化数据。查询用 json_extract、json_query 这些函数解析字段。适合日志里那种结构不固定的字段，但大量解析会慢，能用列存就不要塞 JSON。

# 追问

- JSON 字段查询为什么慢？
