---
id: STORAGE-0499
type: technical
question: Clickhouse的字符串函数like和match的区别是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

like 通配符，match 正则。

# 参考回答

like 用 % 和 _ 做简单通配匹配，快；match 用正则表达式，功能强但慢。简单匹配用 like，复杂用 match。

# 追问

- 怎么选？
