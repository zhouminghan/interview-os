---
id: STORAGE-0533
type: technical
question: 什么是Clickhouse的向量化执行？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按列按批处理，SIMD 加速。

# 参考回答

向量化执行一次处理一批列数据，用 CPU SIMD 并行算，比逐行快。是 ClickHouse 快的关键。扫描过滤聚合都受益。

# 追问

- 向量化为什么快？
