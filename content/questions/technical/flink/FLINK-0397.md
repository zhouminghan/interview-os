---
id: FLINK-0397
type: technical
question: 解释基于FlinkSQL的CDC架构设计及实现方案。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink CDC 监听 binlog，实时同步到下游。

# 参考回答

CDC 架构用 Flink CDC 监听数据库 binlog 和 WAL，把增删改转成流，SQL 加工后同步到下游库或数据湖。实现实时数据同步和数仓入仓。

# 追问

- Flink CDC 的原理？
