---
id: STORAGE-0564
type: technical
question: 如何监控Clickhouse的副本同步状态？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

查 system.replicas 看同步。

# 参考回答

副本同步查 system.replicas 表，看队列积压和同步延迟。积压多说明副本跟不上，要排查网络或负载。

# 追问

- 副本同步怎么看？
