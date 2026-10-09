---
id: FLINK-0081
type: technical
question: 水位线（Watermark）的生成策略有哪些？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

周期性生成和间断生成，按最大事件时间或乱序容忍。

# 参考回答

Watermark 生成有周期性的和间断的，常用按最大事件时间减乱序容忍延迟生成。可以设置乱序延迟，比如允许迟到 5 秒。生成器选对直接影响窗口准确性和延迟。

# 追问

- 乱序容忍设多少？
