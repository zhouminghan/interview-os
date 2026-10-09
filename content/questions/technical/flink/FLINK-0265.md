---
id: FLINK-0265
type: technical
question: 解释FlinkSQL中水印策略的不同类型及其适用场景。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

周期性和间断，按最大事件时间或乱序延迟。

# 参考回答

watermark 策略有周期性的和间断的，常见是最大事件时间减乱序延迟。也支持单调递增。按数据乱序程度选策略。

# 追问

- 乱序延迟怎么设？
