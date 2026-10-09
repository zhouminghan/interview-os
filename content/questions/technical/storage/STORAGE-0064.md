---
id: STORAGE-0064
type: technical
question: 解释一下Hive的视图更新机制。请详细说明视图更新的原理、配置方法、使用场景和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

视图是查询定义，本身不存数据。

# 参考回答

Hive 视图只是保存查询定义，查视图就是现跑底层查询，所以没有"更新"概念。改定义用 ALTER VIEW 或重建。适合封装复杂查询，但每次查都要算。

# 追问

- 视图和表什么区别？
