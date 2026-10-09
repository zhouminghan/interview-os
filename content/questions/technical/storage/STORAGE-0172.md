---
id: STORAGE-0172
type: technical
question: 什么是Hive的资源管理？请详细说明资源管理的策略、配置方法和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

资源交给 YARN 管理，队列隔离。

# 参考回答

Hive 资源由 YARN 管理，按队列、配额、优先级分配。生产按业务分队列，控制并发。合理资源是性能的基础。

# 追问

- 队列怎么划分？
