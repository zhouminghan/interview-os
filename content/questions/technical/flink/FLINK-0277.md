---
id: FLINK-0277
type: technical
question: 如何为FlinkSQL作业配置状态后端(State Backend)？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配置 RocksDB 或内存状态后端。

# 参考回答

SQL 作业状态后端在配置里设，生产大状态用 RocksDB，能落盘支持大状态。配置 checkpoint 和状态后端一起。

# 追问

- RocksDB 状态后端好在哪？
