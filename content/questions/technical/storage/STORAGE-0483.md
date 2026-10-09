---
id: STORAGE-0483
type: technical
question: 如何在Clickhouse中创建分布式表？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ENGINE 用 Distributed。

# 参考回答

分布式表 ENGINE=Distributed(集群, 库, 表, 分片键)，不存数据，做查询分发。底层各分片有本地表。先建本地表再建分布式表。

# 追问

- 分布式表怎么建？
