---
id: SPARK-0139
type: technical
question: Spark SQL的权限管理机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配合 Hive 权限或统一权限系统做表级授权。

# 参考回答

Spark SQL 权限主要靠 Hive Metastore 的权限体系，或接外部统一权限服务，做库表列级别的授权。本身权限模型不重，生产上一般配合 Sentry、Ranger 这些。

# 追问

- Ranger 这类权限系统怎么接入？
