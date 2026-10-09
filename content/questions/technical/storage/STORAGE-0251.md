---
id: STORAGE-0251
type: technical
question: 什么是HBase的二级索引？如何实现？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

二级索引按非 RowKey 字段查，自己建索引表。

# 参考回答

HBase 原生只按 RowKey 查，二级索引要自己建索引表，或用 Phoenix、协处理器实现。写数据时同步维护索引表，查询先查索引再查主表。

# 追问

- 二级索引怎么维护一致？
