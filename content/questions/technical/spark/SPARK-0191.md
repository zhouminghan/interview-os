---
id: SPARK-0191
type: technical
question: 如何实现Structured Streaming的自定义输出格式？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 foreachBatch 写自定义格式。

# 参考回答

自定义输出格式用 foreachBatch 拿到每批 DataFrame，自己写任意格式。也可以实现自定义 Sink 注册。

# 追问

- 自定义 Sink 怎么注册？
