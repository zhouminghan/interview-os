---
id: STORAGE-0196
type: technical
question: 什么是Hive的部署模式？请详细说明各种部署模式的特点、选择标准和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

本地、单机、集群部署。

# 参考回答

Hive 部署有本地测试、单机、集群模式。生产用集群，Metastore 独立服务，执行引擎跑 YARN。按规模和可用性选。

# 追问

- 生产部署怎么规划？
