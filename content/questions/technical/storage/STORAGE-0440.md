---
id: STORAGE-0440
type: technical
question: 不适合使用Clickhouse的场景有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

高频更新、事务、小数据点查。

# 参考回答

ClickHouse 不适合高频更新删除、事务场景、小数据量点查。它面向大批量写入和聚合分析，不是 OLTP。多表 join 也偏弱。

# 追问

- 为什么 join 弱？
