---
id: STORAGE-0814
type: technical
question: A. Producer / Consumer / Partition 关系
difficulty: 0
topic: []
source_type: knowledge
---

- 同 Consumer Group 内，一个 Partition 只被一个 Consumer 消费
- Partition 数 = 最大消费并行度
- 不同 Consumer Group 独立消费全量
