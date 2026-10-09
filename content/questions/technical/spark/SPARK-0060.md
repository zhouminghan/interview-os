---
id: SPARK-0060
type: technical
question: Spark的shuffle过程是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

数据按 key 重分区，写盘再拉取。

# 参考回答

shuffle 是数据按 key 重新分区，map 端先写盘并排序，reduce 端再拉取对应数据。shuffle 是 Spark 最耗时的部分，涉及磁盘 IO 和网络传输。

# 追问

- shuffle 为什么是性能瓶颈？
