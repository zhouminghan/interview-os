---
id: FLINK-0125
type: technical
question: 如何实现Flink与Hadoop的集成？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

读写 HDFS、用 YARN 部署。

# 参考回答

Flink 和 Hadoop 集成主要是读写 HDFS 文件、用 YARN 做资源管理。通过配置 Hadoop 路径和 classpath 就能访问。

# 追问

- Flink 读写 HDFS 怎么配？
