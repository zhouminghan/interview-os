---
id: STORAGE-0072
type: technical
question: Hive中的资源管理是如何实现的？请详细说明资源管理的策略、配置方法、使用场景和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

资源交给 YARN 或资源管理器调度。

# 参考回答

Hive 本身不管理资源，执行引擎跑在 YARN 或集群资源管理器上。通过队列、配额、优先级管理资源。生产按业务分队列，控制并发和资源。

# 追问

- 资源怎么按业务隔离？
