---
id: FLINK-0538
type: technical
question: 什么是有界和无界数据？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Flink 以有界流和无界流的形式处理数据。**有界数据**有起点和终点，计算在所有数据到达后开始，也称为批处理。**无界数据**有起点但没有终点，因为它是数据流。无界数据的处理是连续的，不等待完整数据，数据一生成就开始处理。

---
