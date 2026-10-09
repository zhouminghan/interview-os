---
id: STORAGE-0233
type: technical
question: HBase中scan和get操作的区别是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

get 按 RowKey 查单行，scan 范围扫描。

# 参考回答

get 按单个 RowKey 精确定位一行，快；scan 扫描一段 RowKey 范围，数据量大慢。点查用 get，范围查询用 scan，scan 要设 start 和 stop 范围。

# 追问

- scan 为什么慢？
