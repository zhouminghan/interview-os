---
id: FLINK-0366
type: technical
question: 如何处理FlinkSQL中JOIN操作产生的状态过大问题？有哪些状态清理策略？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 interval join、状态 TTL 控制状态。

# 参考回答

JOIN 状态过大靠 interval join 限制时间范围、配状态 TTL 定期清理过期数据。regular join 必须配 TTL，否则状态无限增长。也可以用窗口 join 天然清理。

# 追问

- 状态 TTL 怎么配？
