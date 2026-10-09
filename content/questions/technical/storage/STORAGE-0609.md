---
id: STORAGE-0609
type: technical
question: 如何实现Clickhouse的读写分离？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

副本分读写。

# 参考回答

读写分离用副本，一个副本负责写，其他副本读，或按连接路由。ClickHouse 副本天然支持读分担。

# 追问

- 读写分离怎么做？
