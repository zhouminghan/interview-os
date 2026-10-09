---
id: FLINK-0385
type: technical
question: 解释一个实际案例：如何解决FlinkSQL作业数据倾斜问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

加盐打散、两阶段聚合、LocalGlobal。

# 参考回答

数据倾斜先定位热点 key，用加盐打散分散、两阶段聚合、开 LocalGlobal 做本地预聚合。看子任务处理量分布确认倾斜。

# 追问

- 加盐后结果怎么还原？
