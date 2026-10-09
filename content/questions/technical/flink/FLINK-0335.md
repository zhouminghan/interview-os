---
id: FLINK-0335
type: technical
question: 如何解决FlinkSQL作业中"数据堆积"问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

提高处理能力或降低输入速率。

# 参考回答

数据堆积说明消费跟不上，处理能力不足。解法是加并行度、优化慢算子、处理倾斜，或者源头限流。看消费延迟持续增长就说明在堆积。

# 追问

- 堆积和反压什么关系？
