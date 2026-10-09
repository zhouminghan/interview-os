---
id: STORAGE-0127
type: technical
question: 什么是Hive的数据倾斜？请详细说明数据倾斜的原因、表现特征、检测方法和各种解决方案。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

热点 key 导致少数任务拖尾。

# 参考回答

倾斜表现是少数任务跑特别久，其他任务早完成。原因是 key 分布不均、join 键热点。检测看任务耗时和 reduce 数据量。解决加盐、两阶段聚合、MapJoin。

# 追问

- 加盐后怎么还原？
