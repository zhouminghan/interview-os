---
id: STORAGE-0187
type: technical
question: 如何实现Hive的高可用？请详细说明高可用的架构设计、配置方法和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

HiveServer2 和 Metastore 多实例。

# 参考回答

高可用把 HiveServer2 和 Metastore 部署多实例，前面挂负载均衡。Metastore 数据库也要高可用。任一实例挂了自动切。

# 追问

- 高可用的关键是什么？
