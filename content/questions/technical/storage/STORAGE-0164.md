---
id: STORAGE-0164
type: technical
question: 什么是Hive的JSON格式？请详细说明JSON格式的特点、优势和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

JSON 半结构化，灵活但解析慢。

# 参考回答

JSON 存半结构化数据，灵活，但解析慢、占空间。适合结构不固定的数据，能用列式就不要大量存 JSON。查询用 json 函数解析。

# 追问

- JSON 查询为什么慢？
