---
id: FLINK-0103
type: technical
question: 如何实现自定义的状态更新逻辑？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

在 ProcessFunction 里用 state 读写状态。

# 参考回答

自定义状态更新在 ProcessFunction 或 RichFunction 里，通过 RuntimeContext 获取 state，在 process 里读写。这是有状态计算的核心。

# 追问

- state 怎么获取？
