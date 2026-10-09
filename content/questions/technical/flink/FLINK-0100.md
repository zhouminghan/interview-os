---
id: FLINK-0100
type: technical
question: Flink ProcessFunction的作用是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

底层处理函数，能访问状态、时间和侧输出。

# 参考回答

ProcessFunction 是最灵活的算子，能访问 keyed state、事件时间、定时器和侧输出，适合复杂有状态逻辑。窗口底层就是用它实现。

# 追问

- ProcessFunction 和 map 区别？
