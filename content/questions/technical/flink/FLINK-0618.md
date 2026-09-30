---
id: FLINK-0618
type: technical
question: Flink 中有哪些窗口？
difficulty: 0
topic: []
source_type: knowledge
---

| 窗口类型 | 说明 |
|---------|------|
| **Tumbling（滚动）** | 固定大小，不重叠 |
| **Sliding（滑动）** | 固定大小 + 滑动步长 |
| **Session（会话）** | 按活跃间隔动态 |
| **Global（全局）** | 自定义 Trigger |
| **Count（计数）** | 按元素个数 |

**窗口函数**：ReduceFunction、AggregateFunction、ProcessWindowFunction
