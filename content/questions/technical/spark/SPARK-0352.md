---
id: SPARK-0352
type: technical
question: Spark 的局限性？
difficulty: 0
topic: []
source_type: knowledge
---

- 没有自带文件系统（依赖 HDFS 或云存储）
- 需要大量内存，成本高于传统数据处理
- 不支持实时记录级处理，只处理微批时间窗口
- 小文件场景下效率低
- 运行需要低延迟和高计算能力
