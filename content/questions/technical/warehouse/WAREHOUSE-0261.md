---
id: WAREHOUSE-0261
type: technical
question: Kafka 中 producer、consumer、partition 三者的关系
difficulty: 0
topic: []
source_type: knowledge
---

**掌握程度**：⬜

**答案要点**：
- 同一 Consumer Group 内，一个 Partition 只被一个 Consumer 消费
- Partition 数 = 最大消费并行度
- 不同 Consumer Group 独立消费全量数据

> 📖 来源：字节国际化数开一面

---
