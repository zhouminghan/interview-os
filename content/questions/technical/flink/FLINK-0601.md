---
id: FLINK-0601
type: technical
question: Flink 的特性有哪些？
difficulty: 0
topic: []
source_type: knowledge
---

- **流批一体**：同一套 API 处理批和流，批是流的特例
- **高性能**：内存计算、流水线执行
- **精确一次（Exactly-Once）**：两阶段提交保证
- **事件时间 + Watermark**：精准处理乱序数据
- **丰富的窗口**：滚动/滑动/会话/计数
- **状态管理 + Checkpoint**：故障恢复
