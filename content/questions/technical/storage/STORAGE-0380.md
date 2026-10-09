---
id: STORAGE-0380
type: technical
question: 分享一个HBase的故障排查案例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看日志和指标定位，先恢复再深挖。

# 参考回答

一个案例是读延迟突增，排查发现某 Region 数据倾斜，BlockCache 命中下降。通过分裂 Region 加预分区，恢复读性能。

# 追问

- 排查思路是什么？
