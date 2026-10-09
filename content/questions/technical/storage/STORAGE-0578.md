---
id: STORAGE-0578
type: technical
question: Clickhouse的集群扩容策略是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

加节点，数据重新分片。

# 参考回答

扩容加节点，新分片加入后数据重新分布。加副本提升读并发。扩容要规划分片和数据迁移。Distributed 表配置更新。

# 追问

- 扩容怎么做？
