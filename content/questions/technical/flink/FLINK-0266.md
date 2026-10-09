---
id: FLINK-0266
type: technical
question: 如何处理FlinkSQL中的乱序数据？有哪些机制可供选择？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

watermark 容忍、allowed lateness、侧输出。

# 参考回答

乱序数据用 watermark 容忍延迟，allowed lateness 允许窗口晚关，超出的走侧输出。三层机制按需组合。

# 追问

- 三层机制怎么配合？
