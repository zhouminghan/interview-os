---
id: STORAGE-0136
type: technical
question: 如何优化Hive的索引使用？请详细说明索引的类型、创建方法、使用场景和性能优化策略。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Hive 索引少用，靠列存分区。

# 参考回答

Hive 索引价值有限，列式存储加分区已经能覆盖大部分优化。与其建索引，不如用 ORC 内部索引、合理分区和分桶。索引维护成本高，不推荐。

# 追问

- 索引为什么不推荐？
