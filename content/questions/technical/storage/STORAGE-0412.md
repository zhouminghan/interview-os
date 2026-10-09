---
id: STORAGE-0412
type: technical
question: 在实际项目中如何实现HBase的实时计算？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

HBase 做查询层，实时计算用 Flink。

# 参考回答

实时计算用 Flink 等流处理框架算，结果写 HBase 供点查。HBase 不做计算，只做快速读写。典型是 Flink 加 HBase。

# 追问

- HBase 在实时链路的作用？
