---
id: SPARK-0218
type: technical
question: 如何优化Spark的CPU使用？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

合理并行度、向量化、减少无效计算。

# 参考回答

CPU 优化靠合理并行度充分利用核，用 DataFrame 的向量化执行，减少无效计算和 UDF。CPU 打不满说明并行度不够。

# 追问

- CPU 打不满怎么办？
