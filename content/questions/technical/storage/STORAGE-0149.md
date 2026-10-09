---
id: STORAGE-0149
type: technical
question: 如何优化Hive的事务处理？请详细说明事务处理的优化策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

少用事务，批量处理。

# 参考回答

Hive 事务有性能开销，能不用就不用。需要更新时用批量，控制 compaction 频率。事务表要 ORC 和分桶，设计好才能保证性能。

# 追问

- 事务为什么影响性能？
