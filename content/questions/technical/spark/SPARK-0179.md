---
id: SPARK-0179
type: technical
question: 如何实现Structured Streaming的自定义转换？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 transform 或自定义 UDF 做转换。

# 参考回答

自定义转换用 transform 对 DataFrame 做任意转换，或写 UDF。跟批处理一样，流批统一的好处。

# 追问

- 流式里 UDF 有什么注意点？
