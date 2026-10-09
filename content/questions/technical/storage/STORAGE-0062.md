---
id: STORAGE-0062
type: technical
question: 什么是Hive的临时表？请详细说明临时表的特点、创建方法、使用场景和生命周期管理。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

临时表只在当前 session 有效。

# 参考回答

临时表用 CREATE TEMPORARY TABLE 建，session 结束自动删，只在当前会话可见。适合中间结果、临时计算，不污染正式表。

# 追问

- 临时表存哪？
