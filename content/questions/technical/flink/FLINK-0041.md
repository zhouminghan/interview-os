---
id: FLINK-0041
type: technical
question: 如何使用Flink实现窗口操作？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 window 定义窗口，再聚合。

# 参考回答

窗口操作先 keyBy 分 key，再 window 指定窗口类型和大小，最后用聚合或 process 处理。窗口把无限流切成有限块算。

# 追问

- 窗口前为什么要 keyBy？
