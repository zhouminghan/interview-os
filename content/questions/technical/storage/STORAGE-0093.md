---
id: STORAGE-0093
type: technical
question: 如何优化Hive的JOIN操作？请详细说明JOIN优化的各种策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

小表 MapJoin、分桶、倾斜优化。

# 参考回答

JOIN 优化：小表 MapJoin 免 shuffle，分桶表 join 减少数据量，热点 key 加盐，先过滤再 join。统计信息准让优化器选对 join 顺序和策略。

# 追问

- 大表 join 大表怎么办？
