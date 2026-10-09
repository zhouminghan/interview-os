---
id: FLINK-0283
type: technical
question: 解释FlinkSQL中的CDC(Change Data Capture)连接器及其工作原理。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

监听数据库变更，实时同步。

# 参考回答

Flink CDC 连接器监听 MySQL、PG 等数据库的 binlog 和 WAL，把增删改变成流，实时同步到下游。是实时数据同步的核心。

# 追问

- CDC 和批量同步区别？
