---
id: FLINK-0244
type: technical
question: 如何在FlinkSQL中配置和使用文件系统连接器(File System Connector)？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配路径和 format，读写文件。

# 参考回答

文件系统连接器配 path 和 format，读写本地、HDFS、S3 文件。format 常用 CSV、JSON、Parquet。适合文件流转。

# 追问

- 文件 format 怎么选？
