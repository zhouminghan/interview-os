---
id: STORAGE-0125
type: technical
question: 如何理解Hive的数据倾斜问题？请详细说明数据倾斜的原因、检测方法和解决方案。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

热点 key 导致个别任务慢。

# 参考回答

倾斜是某些 key 数据特别多，导致少数 reduce 慢。检测看任务耗时分布。解决用加盐打散、两阶段聚合、MapJoin。先定位热点 key。

# 追问

- 怎么定位热点 key？
