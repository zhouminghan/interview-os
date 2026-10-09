---
id: FLINK-0159
type: technical
question: 如何解决Flink作业的冷启动慢的问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

状态加载慢、资源申请慢、初始化耗时。

# 参考回答

冷启动慢多是状态从远端加载慢、资源申请慢、初始化耗时。用增量 checkpoint、本地恢复、减少初始化开销。

# 追问

- 本地恢复是什么？
