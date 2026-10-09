---
id: STORAGE-0094
type: technical
question: 什么是Hive的GROUP BY操作？请详细说明GROUP BY的工作原理、使用场景和性能优化方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

GROUP BY 按字段分组聚合。

# 参考回答

GROUP BY 按分组字段聚合，底层走 shuffle。优化靠提前过滤、减少分组基数、处理倾斜。配合聚合函数算分组统计，是数仓最常用的操作。

# 追问

- GROUP BY 会倾斜吗？
