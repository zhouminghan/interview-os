---
id: FLINK-0602
type: technical
question: Flink 和 Spark Streaming 有什么区别？
difficulty: 0
topic: []
source_type: knowledge
---

| 维度 | Flink | Spark Streaming |
|------|-------|-----------------|
| 设计思想 | **批是一种流** | **流是一种批**（微批） |
| 架构 | TaskManager/JobManager | Driver/Master/Worker/Executor |
| 时间语义 | 三种（事件/处理/摄入） | 处理时间为主 |
| 乱序处理 | Watermark 机制 | 较弱 |
| 容错 | 两阶段提交，Exactly-Once | Checkpoint，不保证不重复 |
| 窗口类型 | 丰富（滚动/滑动/会话） | 有限 |

核心差异：Flink 流处理更强，原生支持乱序和事件时间。
