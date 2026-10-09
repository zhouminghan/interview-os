---
id: FLINK-0384
type: technical
question: 解释一个实际案例：如何优化FlinkSQL复杂JOIN查询性能？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

小表广播、interval join、状态 TTL、预聚合。

# 参考回答

复杂 join 优化：小维表 broadcast、有时间关系用 interval join、regular join 配状态 TTL、先过滤再 join 减少数据量。看执行计划选对 join 策略。

# 追问

- 复杂 join 先看什么？
