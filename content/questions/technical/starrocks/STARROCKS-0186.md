---
id: STARROCKS-0186
type: technical
question: StarRocks 中如何优化大表 JOIN？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Colocate Join、Broadcast、分桶对齐减少数据传输。

# 参考回答

大表 join 优化：分桶键对齐用 Colocate Join，小表 broadcast，排序键过滤先裁剪，统计信息保持新鲜。核心是减少 join 时的数据传输量。

# 追问

- Colocate Join 和 Broadcast 怎么选？
