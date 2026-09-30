---
id: FLINK-0562
type: technical
question: 简要介绍 CEP 状态编程
difficulty: 0
topic: []
source_type: knowledge
---

**复杂事件处理（CEP）**：Flink CEP 是在 Flink 中实现的复杂事件处理库。CEP 允许在无限的时间流中检测事件模式，给我们机会掌握数据中的重要部分。由一个或多个由简单事件组成的时间流按照某些规则进行匹配，然后输出用户想要的数据，即满足规则的复杂事件。

**Flink 数据聚合中，如何不用窗口进行聚合**：
- `ValueState`：用于保存单个值
- `ListState`：用于保存列表元素
- `MapState`：用于保存一组键值对
- `ReducingState`：提供与 `ListState` 相同的方法，返回 `ReducingFunction` 的聚合值
- `AggregatingState`：与 `ReducingState` 类似，返回内部聚合后的 `AggregatingState` 值

---
