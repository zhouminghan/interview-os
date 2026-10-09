---
id: FLINK-0288
type: technical
question: 如何分析和解决FlinkSQL作业中的数据丢失问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

查 checkpoint、sink、offset。

# 参考回答

数据丢失查 checkpoint 是否开、sink 是否可靠、offset 是否正确。没开 checkpoint 或 sink 丢了数据就会少。

# 追问

- 怎么发现数据丢了？
