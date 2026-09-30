---
id: FLINK-0570
type: technical
question: 什么时候用 aggregate，什么时候用 process？
difficulty: 0
topic: []
source_type: knowledge
---

- **aggregate**：增量聚合
- **process**：全量聚合

当计算累加操作时，可以使用 aggregate 操作。当计算窗口内全量数据时，使用 process，例如排序等操作。
