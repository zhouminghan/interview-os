---
id: FLINK-0312
type: technical
question: 如何优化FlinkSQL中的JOIN操作以提高性能？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

小表 broadcast、interval join、lookup 缓存、状态 TTL。

# 参考回答

JOIN 优化：小维表 broadcast，有时间关系用 interval join 控制状态，外部维表用 lookup 加缓存，regular join 配状态 TTL。先看执行计划选对 join 策略。

# 追问

- 大表 join 怎么优化？
