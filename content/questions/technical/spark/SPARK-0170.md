---
id: SPARK-0170
type: technical
question: Structured Streaming的窗口操作有哪些？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

滚动窗口、滑动窗口、会话窗口。

# 参考回答

窗口有滚动窗口固定大小不重叠、滑动窗口有滑动间隔、会话窗口按活跃间隔切分。配合事件时间和水印处理迟到数据。

# 追问

- 三种窗口分别适合什么场景？
