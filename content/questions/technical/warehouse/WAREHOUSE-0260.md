---
id: WAREHOUSE-0260
type: technical
question: 宽窄依赖
difficulty: 0
topic: []
source_type: knowledge
---

**掌握程度**：⬜

**答案要点**：
- 窄依赖：父 RDD 分区最多被一个子 RDD 分区使用，不需要 Shuffle
- 宽依赖：父 RDD 分区被多个子 RDD 分区使用，需要 Shuffle，是 Stage 边界

> 📖 来源：字节国际化数开一面

---

## Kafka / Flink
