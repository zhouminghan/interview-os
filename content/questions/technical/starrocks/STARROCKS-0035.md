---
id: STARROCKS-0035
type: technical
question: StarRocks 中的 Broker Load 是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Broker Load 从 HDFS、对象存储批量导入，适合大文件离线加载。

# 参考回答

Broker Load 是 StarRocks 的批量导入方式，通过 Broker 从 HDFS、S3 这类外部存储拉数据批量加载，适合历史数据初始化和大批量离线导入。可以并行加载多个文件，支持错误行过滤。

# 追问

- Broker Load 和 Stream Load 的区别？
