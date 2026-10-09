---
id: STORAGE-0066
type: technical
question: Hive中的索引类型有哪些？请详细说明各种索引类型的特点、创建方法、使用场景和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

有 Compact 和 Bitmap 索引，但实际少用。

# 参考回答

Hive 索引有 Compact 和 Bitmap，但实际很少用，因为列式存储加分区分桶已经够快，索引维护成本高。新版基本靠 ORC 内部索引和分区优化。

# 追问

- 为什么不建索引？
