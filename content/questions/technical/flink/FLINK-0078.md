---
id: FLINK-0078
type: technical
question: 解释Flink中的触发器（Trigger）概念。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

触发器决定窗口什么时候计算和清理。

# 参考回答

Trigger 决定窗口什么时候触发计算，默认是 watermark 超过窗口结束时间就触发。也可以自定义，比如按数量、按时间提前触发。触发后还可决定是否保留窗口数据。

# 追问

- 默认触发器怎么触发？
