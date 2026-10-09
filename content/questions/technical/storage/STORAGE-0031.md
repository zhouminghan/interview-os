---
id: STORAGE-0031
type: technical
question: Hive中的表分为哪几种类型？它们有什么区别？请详细说明各种表类型的特点、使用场景和注意事项。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

内部表、外部表、分区表、分桶表。

# 参考回答

内部表数据由 Hive 管理，删表删数据；外部表数据在外部，删表只删元数据。分区表按字段分区加速查询，分桶表按 hash 分桶优化 join 和采样。

# 追问

- 内部表和外部表怎么选？
