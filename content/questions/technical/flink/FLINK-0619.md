---
id: FLINK-0619
type: technical
question: Flink 的状态存储
difficulty: 0
topic: []
source_type: knowledge
---

| 存储后端 | 适用场景 |
|---------|---------|
| **MemoryStateBackend** | 小状态，调试 |
| **FsStateBackend** | 大状态，HDFS |
| **RocksDBStateBackend** | 超大规模状态，增量 Checkpoint |
