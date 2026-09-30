---
id: SPARK-0391
type: technical
question: Spark OOM 如何判断和解决
difficulty: 0
topic: []
source_type: knowledge
---

- **Driver OOM**：`collect()` 过大、广播变量过大
- **Executor OOM**：Shuffle 数据倾斜、内存不足
- **解决**：提内存、调分区数、加盐打散、避免全量 collect
