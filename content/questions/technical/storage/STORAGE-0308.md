---
id: STORAGE-0308
type: technical
question: HBase的二级索引实现原理是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

建索引表，写数据同步维护。

# 参考回答

二级索引另建索引表，以要索引的字段做 RowKey，存主表 RowKey。写入时同步更新索引，查询先查索引再查主表。或用 Phoenix、协处理器实现。

# 追问

- 索引一致性怎么保证？
