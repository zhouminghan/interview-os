---
id: FLINK-0579
type: technical
question: Kafka producer、consumer、partition 三者关系？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-国际化数据开发-20250303 Q22

Producer → Topic 的某个 Partition（指定 key 按 hash，不指定轮询）。同一 Consumer Group 内一个 Partition 只被一个 Consumer 消费（保证顺序）。Consumer 数 > Partition 数则多余 Consumer 空闲。Partition 数 = 最大消费并行度。

---
