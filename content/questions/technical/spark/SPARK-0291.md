---
id: SPARK-0291
type: technical
question: Spark 中的不同持久化级别？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Spark 中的不同持久化级别如下：
- `MEMORY_ONLY`：RDD 对象作为反序列化的 Java 对象存储在 JVM 中。如果 RDD 不适合放在内存中，将重新计算。
- `MEMORY_AND_DISK`：RDD 对象作为反序列化的 Java 对象存储在 JVM 中。如果 RDD 不适合放在内存中，将存储在磁盘上。
- `MEMORY_ONLY_SER`：RDD 对象作为序列化的 Java 对象存储在 JVM 中，比反序列化对象更高效。
- `MEMORY_AND_DISK_SER`：RDD 对象作为序列化的 Java 对象存储在 JVM 中。如果 RDD 不适合放在内存中，将存储在磁盘上。
- `DISK_ONLY`：RDD 对象仅存储在磁盘上。

---
