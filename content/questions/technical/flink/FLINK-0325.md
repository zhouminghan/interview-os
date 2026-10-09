---
id: FLINK-0325
type: technical
question: 解释FlinkSQL中的流式聚合(Streaming Aggregation)原理及优化方法。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

流式聚合靠状态累加，数据来一条更新一次结果。

# 参考回答

流式聚合用状态保存每个 key 的累加值，来一条数据更新一次。优化靠 miniBatch 减少状态访问、LocalGlobal 预聚合、状态 TTL 清理。

# 追问

- 流式聚合状态会一直涨吗？
