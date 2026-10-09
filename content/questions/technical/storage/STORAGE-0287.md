---
id: STORAGE-0287
type: technical
question: 解释HBase的故障恢复机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

WAL 重放和 Region 重新分配。

# 参考回答

RegionServer 挂了，Master 检测到后把它上面的 Region 重新分配到其他 RegionServer，新节点重放 WAL 恢复未落盘数据。多副本保证数据不丢。

# 追问

- 故障恢复多久？
