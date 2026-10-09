---
id: FLINK-0177
type: technical
question: Flink的检查点存储格式是什么？如何优化？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

状态序列化到文件，RocksDB 用 SST 文件。

# 参考回答

检查点把状态序列化存到可靠存储，RocksDB 后端存 SST 文件，支持增量。优化靠增量 checkpoint、压缩和本地恢复。

# 追问

- 增量 checkpoint 怎么减小存储？
