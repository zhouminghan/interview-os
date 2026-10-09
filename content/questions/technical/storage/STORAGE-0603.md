---
id: STORAGE-0603
type: technical
question: 如何排查Clickhouse的副本不同步问题？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

查 system.replicas 队列积压。

# 参考回答

副本不同步查 system.replicas 看积压，检查 ZK 状态和网络。积压大排查是网络慢还是副本负载高。修复后自动追赶。

# 追问

- 副本不同步怎么查？
