---
id: SPARK-0216
type: technical
question: 如何优化Spark的网络传输？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

减少 shuffle、数据本地性、压缩传输。

# 参考回答

网络优化减少 shuffle 数据传输，提高数据本地性，开启 shuffle 压缩。网络是分布式瓶颈，少传数据最有效。

# 追问

- 数据本地性怎么提高？
