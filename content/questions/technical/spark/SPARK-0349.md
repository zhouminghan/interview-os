---
id: SPARK-0349
type: technical
question: Apache Spark 和 Hadoop MapReduce 的区别？
difficulty: 0
topic: []
source_type: knowledge
---

| 维度 | Apache Spark | Hadoop MapReduce |
|------|-------------|-----------------|
| 数据处理 | 批处理和实时处理 | 仅批处理 |
| 处理速度 | 基于内存计算，快 | 频繁读写磁盘，慢 |
| 主要特性 | 内存计算、RDD 缓存 | HDFS 上的可靠存储 |
| 复杂操作 | 支持多种高级算子（80+） | 仅 Map 和 Reduce |
| 实时分析 | 支持（Spark Streaming） | 不支持 |
| 交互式查询 | 支持（Spark SQL） | 需要 Hive |
| 机器学习 | 更好支持（MLlib） | 需要 Mahout |
| 代码量 | 更少（10-20 倍） | 较多 |
| 资源管理 | 内置（Standalone/YARN/Mesos/K8s） | 外部（YARN） |
| 容错性 | RDD 血缘恢复 | 数据复制 |
| 易用性 | 更简单 | 较难使用 |
