---
id: STORAGE-0186
type: technical
question: 什么是Hive的故障转移？请详细说明故障转移的原理、配置方法和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

服务故障时自动切换到备用节点。

# 参考回答

故障转移是 HiveServer2 或 Metastore 挂掉时切到备用实例。配置多实例加负载均衡，实现高可用。核心是元数据和状态共享。

# 追问

- 故障转移怎么做？
