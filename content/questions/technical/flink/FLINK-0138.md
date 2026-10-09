---
id: FLINK-0138
type: technical
question: 如何使用Flink实现实时数据同步？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Flink CDC 做实时异构同步。

# 参考回答

实时同步用 Flink CDC 监听数据库变更，实时同步到下游库或数仓。替代传统批量的 Sqoop，秒级同步。

# 追问

- Flink CDC 原理是什么？
