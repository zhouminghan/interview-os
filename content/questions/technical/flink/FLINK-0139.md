---
id: FLINK-0139
type: technical
question: Flink在物联网数据处理中的应用方式是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实时接入设备数据，做监控和告警。

# 参考回答

物联网用 Flink 实时接入海量设备数据，做监控、告警、状态判断。事件时间和乱序处理很关键，设备数据经常乱序。

# 追问

- 物联网数据为什么乱序多？
