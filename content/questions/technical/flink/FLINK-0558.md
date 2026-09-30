---
id: FLINK-0558
type: technical
question: 如何做维表关联？
difficulty: 0
topic: []
source_type: knowledge
---

1. Async I/O
2. 广播（Broadcast）
3. Async I/O + 缓存
4. `open` 方法，然后线程定时刷新，缓存更新先删除，再写另一个，然后写入缓存

---
