---
id: FLINK-0304
type: technical
question: 详细讲解FlinkSQL中的Interval Join概念、语法及适用场景。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Interval Join 限定了关联的时间范围。

# 参考回答

Interval Join 在 join 条件里加时间范围，比如 A 的事件时间在 B 的前后 5 分钟内才匹配。这样状态可以被时间清理，不会无限增长。适合订单和支付这类有先后关系的场景。

# 追问

- Interval Join 和 regular join 的区别？
