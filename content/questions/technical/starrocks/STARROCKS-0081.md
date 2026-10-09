---
id: STARROCKS-0081
type: technical
question: 如何提高 StarRocks 并发查询能力？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

加资源、控制单查询资源、资源组隔离、用物化视图降开销。

# 参考回答

提高并发主要是加 BE 节点和内存，同时用资源组隔离，限制单查询占用的资源，避免一个大查询把并发全拖慢。还可以用物化视图降低单查询开销。

# 追问

- 资源组怎么隔离？
