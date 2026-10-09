---
id: STARROCKS-0076
type: technical
question: 如何对 StarRocks 集群进行容量规划？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按数据量、副本数、查询 QPS 和增长估算节点规模。

# 参考回答

容量规划主要看数据量大小、副本数、峰值 QPS、数据增长趋势，反推需要多少 BE 和磁盘。要留 30% 左右的余量，避免突然增长打满。存算分离的话计算和存储分开估。

# 追问

- 为什么建议留 30% 余量？
