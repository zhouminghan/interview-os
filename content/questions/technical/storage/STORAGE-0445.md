---
id: STORAGE-0445
type: technical
question: 解释Clickhouse的Block结构。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Block 是列式数据块，处理的最小单位。

# 参考回答

Block 是 ClickHouse 内存中列式的数据块，一批列向量。查询按 Block 批处理，配合向量化执行提高性能。是处理的基本单位。

# 追问

- Block 和向量化什么关系？
