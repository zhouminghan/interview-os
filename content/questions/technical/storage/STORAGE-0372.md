---
id: STORAGE-0372
type: technical
question: 如何优化HBase的范围查询？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RowKey 连续设计，缩小 scan 范围。

# 参考回答

范围查询优化 RowKey 设计让相关数据连续，scan 设好 start 和 stop 缩小范围。加缓存和过滤器。范围查询靠 RowKey 排序。

# 追问

- 范围查询怎么快？
