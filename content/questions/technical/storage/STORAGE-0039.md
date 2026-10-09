---
id: STORAGE-0039
type: technical
question: Hive中的索引有哪些类型？如何使用？请详细说明索引的类型、创建方法、使用场景和性能优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Hive 有 Compact 和 Bitmap 索引，但用得少。

# 参考回答

Hive 索引有 Compact 和 Bitmap 两种，但实际用得很少，因为列式存储加分区已经够快，索引维护成本高。新版本基本废弃，靠 ORC 的索引和分区分桶优化。

# 追问

- 为什么 Hive 索引用不上？
