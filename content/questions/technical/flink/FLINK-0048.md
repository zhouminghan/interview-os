---
id: FLINK-0048
type: technical
question: Flink SQL支持哪些窗口函数？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Tumble、Hop、Session、Over 窗口。

# 参考回答

Flink SQL 支持 Tumble 滚动窗口、Hop 滑动窗口、Session 会话窗口，还有 Over 窗口。跟流式窗口对应，配时间属性和 watermark 用。

# 追问

- Tumble 和 Hop 的区别？
