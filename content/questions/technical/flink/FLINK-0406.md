---
id: FLINK-0406
type: technical
question: 如何将FlinkSQL与Apache HBase集成使用？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

HBase 做维表 lookup 或 sink。

# 参考回答

Flink SQL 用 HBase 连接器做维表 lookup 关联，或把结果写 HBase。HBase 是行存，适合点查，不适合大范围扫描。

# 追问

- HBase 适合什么场景？
