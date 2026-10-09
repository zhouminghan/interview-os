---
id: FLINK-0232
type: technical
question: FlinkSQL中有哪些类型的窗口？请详细解释各自的特点和使用场景。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Tumble、Hop、Session、Cumulate 等。

# 参考回答

Flink SQL 窗口有 Tumble 滚动、Hop 滑动、Session 会话、Cumulate 累计窗口。按时间聚合粒度选，配时间属性用。

# 追问

- Cumulate 窗口是什么？
