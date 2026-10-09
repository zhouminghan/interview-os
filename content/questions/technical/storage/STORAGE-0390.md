---
id: STORAGE-0390
type: technical
question: 如何处理HBase的数据倾斜问题？实战案例分享。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RowKey 加盐预分区解决热点。

# 参考回答

数据倾斜用 RowKey 加盐打散热点 key，配合预分区。观察 Region 读写分布定位热点。改成 hash 加业务 ID 后分布均匀。

# 追问

- 加盐怎么设计？
