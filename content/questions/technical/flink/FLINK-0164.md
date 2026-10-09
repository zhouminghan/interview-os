---
id: FLINK-0164
type: technical
question: 如何设计高可用的Flink应用架构？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

多 JobManager、ZooKeeper、可靠 checkpoint。

# 参考回答

高可用架构配多 JobManager 加 ZooKeeper 选主，checkpoint 和 savepoint 存可靠存储，重启策略配好。sink 幂等保证恢复一致。

# 追问

- ZooKeeper 挂了影响 HA 吗？
