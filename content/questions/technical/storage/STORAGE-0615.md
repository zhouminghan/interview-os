---
id: STORAGE-0615
type: technical
question: 如何使用Clickhouse的系统表进行问题排查？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

查 system 表定位问题。

# 参考回答

排查用 system.query_log 看慢查询、system.replicas 看副本、system.metrics 看资源。系统表是排查的入口。

# 追问

- 系统表怎么看？
