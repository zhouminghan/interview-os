---
id: FLINK-0408
type: technical
question: 如何将FlinkSQL与Apache Hadoop生态系统集成？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

读写 HDFS，用 Hive 元数据，YARN 部署。

# 参考回答

Flink SQL 和 Hadoop 集成是读写 HDFS 文件、用 Hive Metastore 管元数据、跑在 YARN 上。复用 Hadoop 生态的存储和资源管理。

# 追问

- Flink 读 HDFS 怎么配？
