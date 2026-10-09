---
id: FLINK-0165
type: technical
question: 大规模Flink集群的资源规划方法是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按吞吐、状态、数据量估算资源。

# 参考回答

资源规划按峰值吞吐、状态大小、数据量估算 slot 数和内存，留余量。RocksDB 状态要算磁盘，网络也要够。动态调整。

# 追问

- 状态大小怎么估算？
