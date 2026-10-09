---
id: FLINK-0037
type: technical
question: 什么是ExecutionEnvironment和StreamExecutionEnvironment？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

一个批一个流，现在都走流式。

# 参考回答

ExecutionEnvironment 是批处理环境，StreamExecutionEnvironment 是流处理环境。Flink 统一后批也是有界流，都用 StreamExecutionEnvironment。

# 追问

- 环境对象怎么创建？
