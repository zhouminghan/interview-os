---
id: FLINK-0144
type: technical
question: Flink作业开发的最佳实践有哪些？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

类型明确、状态可控、配置外部化、可观测。

# 参考回答

开发最佳实践是用明确的数据类型、控制状态大小和 TTL、配置参数外部化、加日志监控、写单测。代码结构清晰，算子职责单一。

# 追问

- 配置外部化怎么做？
