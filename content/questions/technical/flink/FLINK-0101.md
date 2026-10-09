---
id: FLINK-0101
type: technical
question: 如何使用侧输出（Side Output）处理特定事件？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 OutputTag 把特殊事件分流到侧输出。

# 参考回答

侧输出用 OutputTag 定义旁路，主流程处理正常数据，异常或特殊事件用 context.output 发到侧输出，单独处理。适合分流脏数据。

# 追问

- 侧输出适合什么场景？
