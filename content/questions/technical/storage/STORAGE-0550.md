---
id: STORAGE-0550
type: technical
question: 如何减少Clickhouse的磁盘空间占用？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

压缩、TTL、清理旧分区。

# 参考回答

磁盘优化用压缩、TTL 过期删除、定期清理旧分区和数据块。冷热分离把冷数据移走。列式存储本身省空间。

# 追问

- 磁盘占用怎么降？
