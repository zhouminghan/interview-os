---
id: FLINK-0080
type: technical
question: 如何处理晚到的数据（Late Data）？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配 allowed lateness 容忍，超时走侧输出。

# 参考回答

晚到数据用 allowedLateness 允许窗口晚点关闭，迟到的数据更新结果；超过这个时间的走侧输出单独处理或丢弃。要权衡准确性和状态占用。

# 追问

- allowedLateness 会带来什么代价？
