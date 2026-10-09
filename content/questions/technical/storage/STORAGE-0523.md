---
id: STORAGE-0523
type: technical
question: 解释Clickhouse的查询参数绑定。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

参数占位符，执行时替换。

# 参考回答

参数绑定用 {参数名:类型} 占位符，执行时传参。适合重复执行不同参数的查询。客户端和 HTTP 接口支持。

# 追问

- 参数绑定怎么用？
