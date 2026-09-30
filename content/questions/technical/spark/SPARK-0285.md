---
id: SPARK-0285
type: technical
question: 什么是累加器（Accumulator）？
difficulty: 0
topic: []
source_type: knowledge
---

**累加器**是 Spark 中的变量，只能通过结合性和交换性操作来添加。累加器可以并行支持，通常用于实现计数器或累积求和。默认情况下，可以在 Spark 中创建数字类型的累加器。累加器变量可以有名称，也可以没有名称。

---
