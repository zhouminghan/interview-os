---
id: STARROCKS-0027
type: technical
question: 如何在 StarRocks 中创建表？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 CREATE TABLE 指定字段、模型、分区、分桶和排序键。

# 参考回答

创建表时要指定字段类型、数据模型、分区字段、分桶字段和排序键，还可以设副本数。比如建一张明细表按日期分区、按用户 id 分桶、排序键选常用查询字段。分区分桶排序键设计直接决定查询性能。

# 追问

- 分桶字段怎么选？
