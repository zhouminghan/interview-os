---
id: SPARK-0199
type: technical
question: 如何优化Spark的shuffle过程？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

减少 shuffle 次数和数据量，调 shuffle 参数。

# 参考回答

shuffle 优化核心是少 shuffle：小表 broadcast、提前 filter 减数据、用 reduceByKey 代替 groupByKey。再调 shuffle 分区数和内存。

# 追问

- shuffle 分区数怎么定？
