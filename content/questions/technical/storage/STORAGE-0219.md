---
id: STORAGE-0219
type: technical
question: 如何检查Hive的健康状态？请详细说明健康状态检查的步骤、方法和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

检查服务、元数据、存储和任务。

# 参考回答

健康检查按服务、元数据、存储、任务逐项看。服务进程在不在、元数据能不能查、HDFS 正常不、任务能不能跑。定期巡检加告警。

# 追问

- 巡检频率多少？
