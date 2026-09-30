---
id: SPARK-0292
type: technical
question: 如何选择存储级别？
difficulty: 0
topic: []
source_type: knowledge
---

使用存储级别来维持 CPU 效率和内存使用之间的平衡：
- 如果 RDD 对象适合放在内存中，使用 `MEMORY_ONLY` 选项，性能非常好。
- 如果 RDD 对象无法放入内存，选择 `MEMORY_ONLY_SER` 选项，并选择可以提供空间节省的序列化库，此选项性能也相当快。
- 如果 RDD 对象与内存相比差距很大，选择 `MEMORY_AND_DISK` 选项，部分 RDD 对象存储在磁盘上。
- 为了快速故障恢复，使用对象到多个分区的复制。

---
