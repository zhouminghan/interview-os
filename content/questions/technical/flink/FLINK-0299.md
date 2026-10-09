---
id: FLINK-0299
type: technical
question: 如何将Table API与SQL结合使用？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

同一个 TableEnvironment 里混用 Table API 和 SQL。

# 参考回答

在同一个 TableEnvironment 里，注册表后既可以用 Table API 做链式转换，也可以用 sqlQuery 写 SQL，两者操作同一批表。灵活组合，怎么顺手怎么来。

# 追问

- Table API 和 SQL 哪个优先？
