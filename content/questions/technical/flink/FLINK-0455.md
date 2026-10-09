---
id: FLINK-0455
type: technical
question: 在Kafka集群中，如何实现消息的审计和追踪？请详细说明审计日志的收集和分析方法。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

开审计日志记录操作，集中分析。

# 参考回答

审计靠开启 Kafka 审计日志，记录谁对哪个 topic 做了什么操作，集中到日志系统分析。用于合规和排查。

# 追问

- 审计日志记什么？
