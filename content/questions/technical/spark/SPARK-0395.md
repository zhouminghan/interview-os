---
id: SPARK-0395
type: technical
question: A. Spark vs MapReduce
difficulty: 0
topic: []
source_type: knowledge
---

| 维度 | Spark | MapReduce |
|------|-------|-----------|
| 计算模式 | 内存计算 | 磁盘计算 |
| 中间结果 | 内存/磁盘可选 | 强制落盘 |
| 优化 | DAG 优化器 | 无 |
| 算子 | 丰富(80+) | Map+Reduce |
