---
id: STARROCKS-0182
type: technical
question: 如何验证数据迁移到 StarRocks 的正确性？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

行数、金额等关键指标双跑比对。

# 参考回答

迁移正确性靠对账：比对行数、主键唯一性、关键指标的 sum、count，抽样核对明细。两边并行跑一段时间，结果一致才切流。

# 追问

- 对账主要比哪几项？
