---
id: STARROCKS-0020
type: technical
question: 什么是 MPP 架构？StarRocks 如何实现 MPP？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

MPP 是多个节点并行处理同一查询，各自算一部分再汇总。

# 参考回答

MPP 就是大规模并行处理，把一个大查询拆到多个 BE 上并行执行，每个节点算自己那部分数据，最后聚合返回。StarRocks 靠数据分桶分散到多个 BE，查询时所有 BE 并行扫，所以快。

# 追问

- MPP 和 MapReduce 的区别？
