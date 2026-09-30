---
id: SPARK-0383
type: technical
question: Spark 中的 Checkpoint 机制？
difficulty: 0
topic: []
source_type: knowledge
---

检查点将 RDD 保存在可靠的存储系统（如本地磁盘、HDFS 或 S3）中。Replication Checkpoint 在持久化前存储数据，Node-Local Checkpoint 在持久化期间存储。主要用于：
- 截断血缘链，避免血缘过长
- 在迭代算法中减少重算代价
- 流处理中实现 Exactly-Once 语义

---

