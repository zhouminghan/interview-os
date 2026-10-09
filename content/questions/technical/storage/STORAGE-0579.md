---
id: STORAGE-0579
type: technical
question: 如何处理Clickhouse的节点故障？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

副本自动接管。

# 参考回答

节点故障时副本自动接管，查询路由到健康副本。故障节点恢复后重新同步数据。副本数够就不丢数据不中断。

# 追问

- 故障恢复怎么做？
