---
id: FLINK-0114
type: technical
question: Flink作业性能瓶颈的常见原因有哪些？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

数据倾斜、状态过大、序列化、GC、网络。

# 参考回答

常见瓶颈是数据倾斜、状态过大导致访问慢、序列化开销、GC 停顿、网络传输。用 UI 和指标定位到具体算子再优化。

# 追问

- 怎么定位是哪个算子慢？
