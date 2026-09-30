---
id: FLINK-0515
type: technical
question: Flink 的状态存储？
difficulty: 0
topic: []
source_type: knowledge
---

Flink 在计算过程中经常需要存储中间状态，以避免数据丢失并从异常状态中恢复。选择不同的状态存储策略会影响 JobManager 和 Subtask 之间的状态交互，即 JobManager 会与 State 交互来存储状态。

Flink 提供三种状态存储：
- `MemoryStateBackend`（内存）
- `FsStateBackend`（文件系统）
- `RocksDBStateBackend`（RocksDB）

---
