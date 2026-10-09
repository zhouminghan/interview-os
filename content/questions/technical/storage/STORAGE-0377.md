---
id: STORAGE-0377
type: technical
question: 分享一个HBase的性能调优实战案例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

定位热点，加盐预分区解决。

# 参考回答

一个案例是写入慢，发现热点 Region，原因是 RowKey 用递增时间戳。改成反转时间戳加盐预分区后，写入分布均匀，吞吐提升明显。

# 追问

- 热点怎么定位的？
