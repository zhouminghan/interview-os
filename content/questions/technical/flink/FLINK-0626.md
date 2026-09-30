---
id: FLINK-0626
type: technical
question: Checkpoint 超时怎么解决？
difficulty: 0
topic: []
source_type: knowledge
---

- 增大超时时间
- 减小 State 大小（用 RocksDB + 增量 Checkpoint）
- 减少 Checkpoint 间隔
- 增加并发 / 提升网络带宽
