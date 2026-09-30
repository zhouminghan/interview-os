---
id: FLINK-0509
type: technical
question: Flink 的并行度是什么，如何设置？
difficulty: 0
topic: []
source_type: knowledge
---

Flink 的并行度很好理解。例如，KafkaSource 的并行度默认是分区数。并行度就是这个算子需要多少个 TaskSlot，我们应该知道这是并行计算的优势。通常，并行度根据数据量来设置。**建议 source 和 map 算子保持相同的并行度（无 shuffle），因为这些算子的压力不是很大；但当我们的数据表变宽时，最好把它设大一些**。

---
