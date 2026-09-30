---
id: SPARK-0390
type: technical
question: Spark Shuffle 和 MapReduce Shuffle 的区别
difficulty: 0
topic: []
source_type: knowledge
---

| 维度 | Spark Shuffle | MR Shuffle |
|------|--------------|------------|
| 触发时机 | 宽依赖算子 | Map 输出后必然触发 |
| 中间文件 | 落盘 + 内存缓冲 | 强制落盘 |
| 优化机制 | SortShuffle、BypassShuffle、Tungsten | 无 |
| 性能 | 更高效，减少 I/O | 多次落盘，I/O 重 |
