---
id: FLINK-0191
type: technical
question: 某能源公司如何使用Flink监控设备状态？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink 实时监控设备状态和告警。

# 参考回答

能源用 Flink 实时接入设备传感器数据，做状态监控、异常告警和预测维护。设备数据乱序多，用事件时间。

# 追问

- 传感器数据为什么乱序？
