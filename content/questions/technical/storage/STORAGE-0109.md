---
id: STORAGE-0109
type: technical
question: 什么是Hive的JSON函数？请详细说明常用JSON函数（如GET\_JSON\_OBJECT、JSON\_TUPLE等）的使用方法和场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

解析 JSON 字段取值。

# 参考回答

get_json_object 按路径取 JSON 里的值，json_tuple 一次取多个字段。适合解析 JSON 格式的日志或字段。大量解析会慢，尽量把 JSON 拆成列。

# 追问

- JSON 解析慢怎么办？
