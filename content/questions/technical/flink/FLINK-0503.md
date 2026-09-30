---
id: FLINK-0503
type: technical
question: Flink 是否需要依赖 Hadoop？
difficulty: 0
topic: []
source_type: knowledge
---

Flink 可以完全独立于 Hadoop 运行，不依赖 Hadoop 组件，但作为大数据的基础，可以想象大多数大数据框架都无法绕过它。Flink 可以支持很多组件，例如 Yarn 的资源调度、HBase 的实时数据存储和维表访问、HDFS 状态存储和离线计算等。

---
