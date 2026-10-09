---
id: STARROCKS-0052
type: technical
question: StarRocks 的审计日志如何配置和使用？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

审计日志记录谁在什么时间执行了什么 SQL，用于合规和追溯。

# 参考回答

配置审计日志后，StarRocks 会记录登录、查询、DDL 这些操作，包含用户、时间、SQL、结果状态。用于安全审计和问题排查。一般按合规要求开启，注意日志量大会占存储。

# 追问

- 审计日志存哪里、保留多久？
