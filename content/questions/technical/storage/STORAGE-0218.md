---
id: STORAGE-0218
type: technical
question: 什么是Hive的健康检查？请详细说明健康检查的方法、指标和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

定期检查服务和依赖状态。

# 参考回答

健康检查看 HiveServer2、Metastore、执行引擎、HDFS 状态，检查关键指标。定期巡检，异常提前发现。自动化健康检查脚本。

# 追问

- 健康检查看什么？
