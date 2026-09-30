---
id: FLINK-0608
type: technical
question: Flink 是否需要依赖 Hadoop？
difficulty: 0
topic: []
source_type: knowledge
---

不依赖。Flink 可以独立运行。但实际生产中通常配合 Hadoop 生态：用 YARN 做资源调度、HDFS 存状态、HBase 做维表存储。
