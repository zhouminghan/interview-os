---
id: SPARK-0161
type: technical
question: Spark Streaming的批处理间隔如何设置？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按延迟要求和吞吐平衡设批间隔。

# 参考回答

批间隔决定延迟下限，设太小调度开销大，太大延迟高。一般几秒到几十秒，按业务延迟要求和吞吐能力平衡。

# 追问

- 批间隔和延迟什么关系？
