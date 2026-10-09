---
id: STORAGE-0616
type: technical
question: 解释Clickhouse的查询队列管理。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

并发限制控制查询排队。

# 参考回答

查询队列靠并发限制，超过的查询排队等待。配合优先级，资源紧张时有序执行。避免资源打满。

# 追问

- 队列怎么管？
