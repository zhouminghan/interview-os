---
id: STARROCKS-0162
type: technical
question: StarRocks 在大数据量场景下的性能如何？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

大数据量下靠分区分桶、列存、并行扫保持性能。

# 参考回答

数据量大了以后性能取决于分区分桶是否合理、列存能否少扫、集群是否够横向扩。StarRocks 的 MPP 架构让大数据量能靠加节点线性提升。

# 追问

- 加节点能线性提升吗？
