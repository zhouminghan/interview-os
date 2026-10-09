---
id: STORAGE-0333
type: technical
question: 如何处理HBase的数据倾斜问题？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RowKey 加盐分散热点。

# 参考回答

数据倾斜靠 RowKey 加盐打散热点 key，预分区配合。避免递增 RowKey 导致写热点。倾斜会导致个别 Region 过大，及时分裂。

# 追问

- 加盐怎么还原？
