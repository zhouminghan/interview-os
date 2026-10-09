---
id: STORAGE-0197
type: technical
question: 如何部署Hive集群？请详细说明集群部署的步骤、配置方法和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Metastore 独立、执行引擎配 YARN。

# 参考回答

部署 Hive 集群：Metastore 独立部署接关系库，HiveServer2 多实例，执行引擎配 YARN 或 Spark。配置高可用和监控。

# 追问

- 部署顺序？
