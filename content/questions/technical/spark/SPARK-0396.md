---
id: SPARK-0396
type: technical
question: B. Shuffle 过程
difficulty: 0
topic: []
source_type: knowledge
---

- MR Shuffle：环形缓冲区溢写 → 排序 → 合并 → Reduce 拉取
- Spark Shuffle：Hash Shuffle → Sort-Based Shuffle 演进
