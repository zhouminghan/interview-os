---
id: FLINK-0557
type: technical
question: 如果出现数据倾斜怎么办？
difficulty: 0
topic: []
source_type: knowledge
---

**如何查看数据倾斜**：在 Flink 的 Web UI 中可以看到数据倾斜，即每个 subtask 处理的数据量差异很大。例如，有些只有 1M，有些有 100M，这就是严重的数据倾斜。

**KafkaSource 端的数据倾斜**：例如上游 Kafka 发送时指定了 key，存在数据热点，那么就在接入后做负载均衡（前提是不 keyBy）。

**聚合类算子的数据倾斜**：预聚合 + 全局聚合。

---
