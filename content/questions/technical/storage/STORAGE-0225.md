---
id: STORAGE-0225
type: technical
question: 什么是HBase？请详细解释其主要特点和应用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

HBase 是 Hadoop 上的分布式列族存储，适合海量点查。

# 参考回答

HBase 是构建在 HDFS 上的分布式列族数据库，按 RowKey 点查快、可横向扩展、支持多版本。适合海量数据的实时读写，比如用户画像、时序数据。

# 追问

- HBase 为什么点查快？
