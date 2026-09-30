---
id: SPARK-0370
type: technical
question: 如何选择存储级别？
difficulty: 0
topic: []
source_type: knowledge
---

1. 若 RDD 适合默认存储级别（MEMORY_ONLY），使用默认值（CPU 效率最高）
2. 若内存不足，尝试 MEMORY_ONLY_SER 减少空间占用
3. 若仍无法容纳，使用 MEMORY_AND_DISK 或 MEMORY_AND_DISK_SER
4. 若非关键数据，使用 DISK_ONLY
5. 始终优先选择较快的存储级别
