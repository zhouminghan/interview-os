---
id: FLINK-0311
type: technical
question: FlinkSQL中有哪些常见的性能调优参数？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

并行度、内存、checkpoint、miniBatch 等参数。

# 参考回答

常见调优参数有并行度、托管内存、checkpoint 间隔、miniBatch 开关、状态 TTL、join 策略提示。按瓶颈调，别盲调，先看执行计划和指标。

# 追问

- 调优顺序是什么？
