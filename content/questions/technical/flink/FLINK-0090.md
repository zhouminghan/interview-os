---
id: FLINK-0090
type: technical
question: 影响Flink性能的因素有哪些？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

并行度、状态、序列化、数据倾斜、GC、网络。

# 参考回答

性能因素主要是并行度、状态大小和访问、序列化开销、数据倾斜、GC 停顿、网络传输。先定位瓶颈是 CPU、IO 还是倾斜。

# 追问

- 怎么快速定位瓶颈？
