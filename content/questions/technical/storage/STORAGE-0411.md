---
id: STORAGE-0411
type: technical
question: 如何设计HBase的数据分析方案？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

HBase 不适合复杂分析，导出到分析引擎。

# 参考回答

HBase 定位是点查，复杂分析不擅长。方案是把数据导出到 Hive、Spark 或 OLAP 引擎做分析。HBase 只做实时查询层。

# 追问

- 分析为什么不在 HBase？
