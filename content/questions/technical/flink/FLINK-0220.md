---
id: FLINK-0220
type: technical
question: 解释FlinkSQL中的处理时间(Processing Time)和事件时间(Event Time)的区别。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

事件时间看数据时间戳，处理时间看系统时间。

# 参考回答

事件时间是数据里带的时间，能处理乱序，结果可重现；处理时间是算子处理时的系统时间，简单但乱序和重放会不准。

# 追问

- 为什么事件时间可重现？
