---
id: FLINK-0155
type: technical
question: 如何解决Flink作业中的数据丢失问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

开 checkpoint、source 可重放、sink 可靠。

# 参考回答

数据丢失先确认 checkpoint 开了，source offset 能重放，sink 可靠不丢。没开 checkpoint 或 sink 丢了就会少数据。配 exactly-once。

# 追问

- 没开 checkpoint 会怎样？
