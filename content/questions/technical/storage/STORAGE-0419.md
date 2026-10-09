---
id: STORAGE-0419
type: technical
question: 分享一个HBase的集群扩容案例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

加 RegionServer 后均衡 Region。

# 参考回答

扩容加 RegionServer，新节点注册后均衡器把 Region 迁过去，负载重新分布。数据不用手动迁移，HDFS 自动。扩容平滑。

# 追问

- 扩容步骤？
