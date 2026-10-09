---
id: FLINK-0267
type: technical
question: FlinkSQL中如何实现多流合并时的水印传播？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

多流合并取最小 watermark。

# 参考回答

多流合并时 watermark 取所有输入流的最小值，保证不会因为某条流慢而提前触发导致丢数据。join 和 union 都这样。

# 追问

- 为什么取最小而不是最大？
