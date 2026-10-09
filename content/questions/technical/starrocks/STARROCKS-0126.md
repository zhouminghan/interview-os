---
id: STARROCKS-0126
type: technical
question: StarRocks 为什么采用 MPP 架构？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

MPP 多节点并行处理，适合海量数据的分析聚合。

# 参考回答

MPP 把查询拆到多个节点并行执行，天然适合 OLAP 这种大规模扫描加聚合的场景，横向加节点就能提升算力。比单机或 MapReduce 模型更适合交互式查询。

# 追问

- MPP 和 MapReduce 的关键区别？
