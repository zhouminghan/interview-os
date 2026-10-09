---
id: FLINK-0034
type: technical
question: Flink的编程模型是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

数据流、转换算子、状态，流批一体。

# 参考回答

Flink 编程模型是数据流经过一系列算子转换，配合状态和窗口。核心抽象是 DataStream，批处理也被看成有界流，所以流批一体。

# 追问

- 为什么批也是流？
