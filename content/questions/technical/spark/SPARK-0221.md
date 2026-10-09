---
id: SPARK-0221
type: technical
question: 如何优化Spark的容错机制？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

控制 checkpoint 频率和血缘长度。

# 参考回答

容错优化是平衡重算成本和 checkpoint 开销，长血缘适当 checkpoint，宽依赖数据落盘减少重算。

# 追问

- checkpoint 太重会怎样？
