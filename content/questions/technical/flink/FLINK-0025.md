---
id: FLINK-0025
type: technical
question: Flink相比其他流处理框架（如Spark Streaming、Storm）有哪些优势？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

真流式低延迟、exactly-once、事件时间、流批一体。

# 参考回答

相比 Spark Streaming 的微批，Flink 是真正的逐条流式，延迟毫秒级；相比 Storm，Flink 吞吐更高、有 exactly-once 和状态管理。而且流批一体，一套引擎两用。

# 追问

- 微批和真流式差在哪？
