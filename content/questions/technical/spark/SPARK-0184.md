---
id: SPARK-0184
type: technical
question: Structured Streaming的窗口大小如何设置？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按业务聚合粒度设窗口，配合水印。

# 参考回答

窗口大小按业务统计粒度设，比如 5 分钟、1 小时。配合水印容忍迟到，窗口太大状态多，太小结果碎。

# 追问

- 窗口太大有什么代价？
