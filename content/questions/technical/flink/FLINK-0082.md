---
id: FLINK-0082
type: technical
question: 如何处理多流间的时间对齐问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

多流 join 或 union 用最慢流的 watermark 对齐。

# 参考回答

多流时间对齐，比如双流 join，watermark 取所有输入流里最慢的，保证不会提前触发导致漏数据。各自流的 watermark 推进，算子用最小的那个。

# 追问

- 为什么取最慢的 watermark？
