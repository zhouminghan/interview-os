---
id: STARROCKS-0067
type: technical
question: 什么是 StarRocks 的向量化执行引擎？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

向量化执行按批处理数据，利用 CPU SIMD 加速，比逐行快。

# 参考回答

向量化执行就是一次处理一批数据，而不是一行一行处理，能利用 CPU 的 SIMD 指令并行算，还减少函数调用开销。所以聚合、过滤这些操作特别快。这是 StarRocks 快的核心原因之一。

# 追问

- 向量化和逐行处理的区别？
