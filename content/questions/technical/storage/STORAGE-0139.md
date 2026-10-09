---
id: STORAGE-0139
type: technical
question: 如何优化Hive的资源使用？请详细说明资源优化的各种策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按任务量配资源，队列隔离。

# 参考回答

资源优化按任务量配 executor、内存、核数，用队列按业务隔离，开动态资源分配。资源别过配浪费，也别不够 OOM。

# 追问

- 资源怎么估算？
