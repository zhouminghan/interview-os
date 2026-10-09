---
id: STORAGE-0053
type: technical
question: 什么是Hive的倾斜优化？请详细说明数据倾斜的原因、检测方法、优化策略和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

数据倾斜是热点 key 导致个别任务慢。

# 参考回答

倾斜是某些 key 数据特别多，导致少数 reduce 任务慢。检测看任务耗时分布。优化用加盐打散、两阶段聚合、MapJoin、调整分区。先定位热点 key 再处理。

# 追问

- 加盐怎么还原？
