---
id: STORAGE-0120
type: technical
question: Hive中的索引如何创建和使用？请详细说明索引的类型、创建方法、使用场景和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Hive 索引少用，靠列存和分区优化。

# 参考回答

Hive 索引有 Compact 和 Bitmap，但实际少用，维护成本高，列式存储加分区分桶已经够快。新版主要靠 ORC 内部索引。

# 追问

- 为什么 Hive 不依赖索引？
