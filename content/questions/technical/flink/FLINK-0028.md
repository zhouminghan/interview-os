---
id: FLINK-0028
type: technical
question: 什么是TaskSlot？它在Flink中扮演什么角色？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

TaskSlot 是 TaskManager 里的资源单位，一个 slot 跑一个并行子任务。

# 参考回答

TaskSlot 是 TaskManager 内的资源隔离单位，每个 slot 是一份 CPU 和内存。并行度决定需要多少 slot。同一个 slot 里的算子可以共享，提高利用率。

# 追问

- slot 和并行度什么关系？
