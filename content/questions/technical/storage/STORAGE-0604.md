---
id: STORAGE-0604
type: technical
question: 解释Clickhouse的ZooKeeper异常处理。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ZK 挂了副本协调失效。

# 参考回答

ZK 异常时副本同步和分布式 DDL 失效，读写可能受影响。排查 ZK 状态、网络、磁盘。ZK 要独立部署高可用。

# 追问

- ZK 挂了怎么办？
