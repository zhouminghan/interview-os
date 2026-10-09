---
id: FLINK-0235
type: technical
question: 如何在FlinkSQL中定义会话窗口(Session Window)和配置其属性？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 SESSION 函数加活跃间隔。

# 参考回答

会话窗口用 SESSION(时间列, 活跃间隔) 定义，按数据活跃间隔动态切分，没有固定大小。适合用户会话这类场景。

# 追问

- 会话窗口怎么切分？
