---
id: STORAGE-0458
type: technical
question: Clickhouse的查询执行流程是怎样的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

解析优化后并行执行。

# 参考回答

查询流程：解析 SQL、生成执行计划、分片并行执行、聚合结果返回。向量化执行和索引加速扫描。分布式查询各分片算再汇总。

# 追问

- 分布式查询怎么执行？
