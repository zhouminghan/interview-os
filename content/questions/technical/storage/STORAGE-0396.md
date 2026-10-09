---
id: STORAGE-0396
type: technical
question: 如何处理HBase的Region热点问题？实战分享。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

加盐 RowKey 分散热点。

# 参考回答

Region 热点用 RowKey 加盐或 hash 打散，预分区。监控各 Region 读写量定位热点。避免递增 RowKey。处理后热点消除。

# 追问

- 热点怎么定位？
