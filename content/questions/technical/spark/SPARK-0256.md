---
id: SPARK-0256
type: technical
question: 在 Spark 中对 RDD 可以执行哪些操作？
difficulty: 0
topic: []
source_type: knowledge
---

在 Spark 中可以对 RDD 执行两种主要操作：
1. **转换（Transformation）**：用于从现有 RDD 创建新 RDD 的函数。
2. **行动（Action）**：在 RDD 上运行计算后将值返回给 Driver 程序的函数。

---
