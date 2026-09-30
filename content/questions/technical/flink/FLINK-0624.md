---
id: FLINK-0624
type: technical
question: 如何处理迟到数据？
difficulty: 0
topic: []
source_type: knowledge
---

- 设置 `allowedLateness`（允许迟到时间）
- 迟到数据 → SideOutput（侧输出流）
- Watermark 延迟策略
