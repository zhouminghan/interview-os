---
id: SPARK-0249
type: technical
question: 什么是 Spark 中的转换（Transformation）？
difficulty: 0
topic: []
source_type: knowledge
---

Spark 中的**转换**是可以应用到 RDD 的函数，转换的输出是另一个 RDD。Spark 中的转换是**惰性操作**，意味着它不会立即执行。只有当我们调用一个**行动（Action）**时，转换才会执行。转换不会改变输入的 RDD，还可以创建一系列转换来构成数据流。

---
