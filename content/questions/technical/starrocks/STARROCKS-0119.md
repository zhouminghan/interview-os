---
id: STARROCKS-0119
type: technical
question: StarRocks 的向量化计算有什么优势？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

向量化按批处理、用 SIMD 加速、减少调用开销。

# 参考回答

向量化计算一次处理一批数据，利用 CPU SIMD 指令并行算，函数调用次数也少，所以比逐行处理快很多。聚合、过滤这些收益最明显。

# 追问

- SIMD 是什么？
