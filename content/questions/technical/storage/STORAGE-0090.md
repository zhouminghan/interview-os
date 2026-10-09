---
id: STORAGE-0090
type: technical
question: 如何理解Hive的桶操作？请详细说明如何创建、管理桶表，以及桶表的使用场景和注意事项。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

桶表按 hash 分桶，建表时指定。

# 参考回答

桶表建表时 CLUSTERED BY 分桶字段 INTO 桶数 BUCKETS。桶表适合 join 和采样，分桶键选高基数均匀的。桶数别太多，和并行度匹配。

# 追问

- 分桶和分区配合用？
