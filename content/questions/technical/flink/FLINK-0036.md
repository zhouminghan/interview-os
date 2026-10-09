---
id: FLINK-0036
type: technical
question: Flink中的环境（Environment）有哪些类型？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

StreamExecutionEnvironment 和老的 ExecutionEnvironment。

# 参考回答

Environment 是程序入口，流处理用 StreamExecutionEnvironment，老批处理用 ExecutionEnvironment。现在统一用 StreamExecutionEnvironment。

# 追问

- 环境里一般配置什么？
