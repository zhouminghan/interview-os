---
id: SPARK-0388
type: technical
question: 内存架构
difficulty: 0
topic: []
source_type: knowledge
---

Executor 内存分为：
- **Execution Memory**（执行内存）：join/sort/shuffle/agg，占比 60%
- **Storage Memory**（存储内存）：cache/广播变量
- **User Memory**（用户内存）：UDF/自定义对象，占比 40%
- **Reserved Memory**（保留内存）：300MB 内部使用

Execution + Storage = 统一内存区（`spark.memory.fraction=0.6`），两者可互相借用，Execution 优先。
