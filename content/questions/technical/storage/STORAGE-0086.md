---
id: STORAGE-0086
type: technical
question: 如何理解Hive的DROP语句？它和传统数据库的DROP语句有什么区别？删除表时需要注意哪些问题？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

DROP 删表，内部表连数据一起删。

# 参考回答

DROP TABLE 删表，内部表会连 HDFS 数据一起删，外部表只删元数据。删前要确认依赖和备份，生产删表要谨慎，最好先改名观察再删。

# 追问

- 删表前要注意什么？
