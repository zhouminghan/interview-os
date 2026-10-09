---
id: FLINK-0328
type: technical
question: 如何使用FlinkSQL实现增量计算(Incremental Computation)？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

流式天然是增量计算，状态只更新变化部分。

# 参考回答

增量计算就是只算新来的数据，状态里维护累加结果，不用重算历史。流式聚合、join 天然是增量的。这也是流处理比批处理更高效的原因之一。

# 追问

- 增量计算为什么快？
