---
id: FLINK-0237
type: technical
question: 如何处理FlinkSQL窗口中的迟到数据(Late Data)？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠 watermark 和 allowed lateness 处理。

# 参考回答

迟到数据处理靠 watermark 容忍乱序，超出 watermark 但还在 allowed lateness 内的数据更新结果，再超出的丢弃或侧输出。

# 追问

- 迟到数据侧输出怎么做？
