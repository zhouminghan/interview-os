---
id: STORAGE-0573
type: technical
question: 解释Clickhouse的查询重试机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

查询失败可以重试。

# 参考回答

查询重试配置重试次数，失败自动重试。适合偶发错误。注意重试会重复执行，幂等查询才安全。客户端也做重试。

# 追问

- 重试注意什么？
