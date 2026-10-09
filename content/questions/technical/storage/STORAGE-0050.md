---
id: STORAGE-0050
type: technical
question: 什么是Hive的向量化执行？请详细说明向量化执行的原理、配置方法、使用场景和性能提升。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

向量化按批处理数据，利用 CPU 加速。

# 参考回答

向量化执行一次处理一批数据，用 CPU 的 SIMD 指令并行算，比逐行快。配置开启向量化，对扫描、过滤、聚合收益明显。适合 ORC 格式的查询。

# 追问

- 向量化对哪些算子快？
