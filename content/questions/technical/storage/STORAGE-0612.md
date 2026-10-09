---
id: STORAGE-0612
type: technical
question: 如何处理Clickhouse的表结构变更？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ALTER 加列，改类型谨慎。

# 参考回答

表结构变更用 ALTER 加列很快，改列类型有限制，大表重写慢。变更前评估影响，测试环境先验证。

# 追问

- 结构变更注意什么？
