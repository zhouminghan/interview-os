---
id: STARROCKS-0135
type: technical
question: StarRocks 的向量化执行引擎设计思想是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按列按批处理，利用 SIMD，减少虚函数调用。

# 参考回答

向量化执行的核心是列式加批处理，一次处理一批数据，用 SIMD 并行算，减少逐行的函数调用开销。数据按列组织也能更好利用 CPU 缓存。

# 追问

- 向量化对哪些算子收益最大？
