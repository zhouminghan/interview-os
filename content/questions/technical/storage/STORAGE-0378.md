---
id: STORAGE-0378
type: technical
question: 如何处理HBase集群的容量规划？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按数据量、吞吐、副本估算。

# 参考回答

容量规划按数据量、副本数、吞吐估算磁盘、内存、节点数。留余量应对增长。Region 数也要规划，和内存匹配。

# 追问

- 容量怎么估算？
