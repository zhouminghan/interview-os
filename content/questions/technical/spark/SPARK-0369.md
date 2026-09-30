---
id: SPARK-0369
type: technical
question: Spark 中的不同持久化级别？
difficulty: 0
topic: []
source_type: knowledge
---

- `MEMORY_ONLY`：内存中存储反序列化对象（默认）
- `MEMORY_AND_DISK`：内存不足时写入磁盘
- `MEMORY_ONLY_SER`：内存中存储序列化对象（节省空间）
- `MEMORY_AND_DISK_SER`：序列化 + 磁盘溢出
- `DISK_ONLY`：仅磁盘存储
- `OFF_HEAP`：堆外内存存储
