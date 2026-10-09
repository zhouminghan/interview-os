---
id: STORAGE-0344
type: technical
question: HBase的HDFS优化策略有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

副本数、块大小、本地性优化。

# 参考回答

HDFS 优化调副本数、块大小，HBase 块可以设大点。保证数据本地性，磁盘用 SSD。HDFS 是 HBase 存储底座，IO 直接影响性能。

# 追问

- 块大小设多大？
