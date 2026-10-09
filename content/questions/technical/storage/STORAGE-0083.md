---
id: STORAGE-0083
type: technical
question: 什么是Hive的TRUNCATE语句？它和DELETE语句有什么区别？使用TRUNCATE时需要注意哪些问题？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

TRUNCATE 清空表，比 DELETE 快。

# 参考回答

TRUNCATE 直接清空表数据，不逐条删，速度快。内部表删数据文件，外部表只删目录里的文件。注意不可恢复，删前确认。

# 追问

- TRUNCATE 能恢复吗？
