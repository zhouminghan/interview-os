---
id: STARROCKS-0195
type: technical
question: 如何优化 StarRocks 中的 TopN 查询？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

排序键加 limit 提前截断，避免全局排序。

# 参考回答

TopN 优化靠排序键让数据本来有序，加上 limit 提前截断，不用全量排序。分桶均匀让并行 TopN 再汇总也快。

# 追问

- TopN 为什么不用全排序？
