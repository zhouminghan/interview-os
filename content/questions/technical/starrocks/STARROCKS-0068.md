---
id: STARROCKS-0068
type: technical
question: StarRocks 如何处理 JOIN 查询？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按表大小和分桶选 Broadcast、Shuffle、Bucket Shuffle 或 Colocate Join。

# 参考回答

小表用 Broadcast 广播到各节点，大表用 Shuffle 按 key 重分布，分桶一致的表用 Bucket Shuffle 或 Colocate Join 减少数据传输。CBO 会自动选，也可以看执行计划确认用的是哪种。

# 追问

- Colocate Join 为什么快？
