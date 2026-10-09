---
id: STORAGE-0213
type: technical
question: 如何规划Hive的维护时间？请详细说明维护时间规划的方法、考虑因素和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按业务低峰和依赖规划。

# 参考回答

维护时间看业务低峰、上下游任务依赖、数据 SLA。避开高峰和关键任务，提前通知。维护操作要控制在窗口内完成。

# 追问

- 维护超时怎么办？
