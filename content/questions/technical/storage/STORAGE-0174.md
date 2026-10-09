---
id: STORAGE-0174
type: technical
question: 什么是Hive的查询调度？请详细说明查询调度的工作原理、配置方法和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

查询调度交给 YARN，按队列和优先级。

# 参考回答

Hive 查询调度由 YARN 完成，按队列、优先级、资源分配任务。配置公平调度器，按业务设权重。调度影响任务排队和资源利用。

# 追问

- 公平调度和容量调度区别？
