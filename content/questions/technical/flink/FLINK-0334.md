---
id: FLINK-0334
type: technical
question: 如何分析和解决FlinkSQL中的反压(Back Pressure)问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

从反压算子往下游找瓶颈。

# 参考回答

反压说明下游处理跟不上。看反压状态找到最下游的慢算子，分析是计算重、外部调用慢还是倾斜。加并行度、优化算子或处理倾斜。

# 追问

- 反压会丢数据吗？
