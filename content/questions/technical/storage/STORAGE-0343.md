---
id: STORAGE-0343
type: technical
question: 详细讲解HBase的ZooKeeper调优。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ZK 独立部署，别和 HBase 抢资源。

# 参考回答

ZooKeeper 单独部署，调 session 超时和快照参数。ZK 压力不大但要稳定，它挂了 HBase 不可用。监控 ZK 状态。

# 追问

- ZK 挂了影响多大？
