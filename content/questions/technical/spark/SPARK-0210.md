---
id: SPARK-0210
type: technical
question: 如何优化Spark的累加器使用？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

只在行动里读值，避免重复累加。

# 参考回答

累加器优化主要是别在转换里读值，避免因重算重复累加，只在行动完成后读最终值。

# 追问

- 在转换里读累加器会怎样？
