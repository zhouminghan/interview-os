---
id: FLINK-0262
type: technical
question: 解释FlinkSQL中窗口聚合的内部实现机制。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠状态存窗口数据，watermark 触发计算。

# 参考回答

窗口聚合内部用状态保存窗口内的数据或增量聚合结果，watermark 到达窗口结束时触发计算和输出，然后清理状态。

# 追问

- 窗口状态什么时候清理？
